<template>
  <div>
    <p class="title">- {{title}} -</p>
    <v-chart :width="700" :height="500"  :data="geoData" :padding="padding">
      <v-tooltip :showTitle="false" />
      <v-view :data="geoData"><div></div></v-view>
      <v-view :data="data">
        <v-polygon :position="polygonOpts.position" :label="polygonOpts.label" :vStyle="polygonOpts.style" :color="polygonOpts.color" />
      </v-view>
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
  const colors = [ "#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac" ];
  const polygonOpts = {
    position: 'longitude*lantitude',
    label: ['name', {
      textStyle: {
        fill: '#fff',
        fontSize: 10,
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)'
      },
    }],
    style: ['name', {
      textStyle: {
        fill: '#fff',
        fontSize: 10,
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)'
      },
    }],
    color: ['value', '#BAE7FF-#1890FF-#0050B3'],
  };
    export default {
        name: "index",
        data(){
          return {
            title:'IP地址全国分布图',
            data: [],
            geoData: {},
            polygonOpts,
            padding:[20,50,20,50],
            name: '',
            currentAreaNode: null,
            districtExplorer: null,
          }
        },
      mounted() {
        const self = this;
        jQuery('#mount').append('<div id="china" ></div>');
        $.when(
          $.getScript('https://webapi.amap.com/maps?v=1.4.1&key=0d78256ea89beeb8c25d1cd047549d1f'),
          $.getScript('https://webapi.amap.com/ui/1.0/main.js?v=1.0.11')).then(() => {
          // 调用高德 api 绘制底图以及获取 geo 数据
          const map = new AMap.Map('china', {
            zoom: 4
          });

          AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], function(DistrictExplorer) {
            // 创建一个实例
            const districtExplorer = window.districtExplorer = new DistrictExplorer({
              eventSupport: true, //打开事件支持
              map: map
            });

            // feature被点击
            districtExplorer.on('featureClick', function(e, feature) {
              var props = feature.properties;
              //如果存在子节点
              if (props.childrenNum > 0) {
                //切换聚焦区域
                self.switch2AreaNode(props.adcode);
              }
            });

            //外部区域被点击
            districtExplorer.on('outsideClick', function(e) {
              districtExplorer.locatePosition(e.originalEvent.lnglat, function(error, routeFeatures) {
                if (routeFeatures && routeFeatures.length > 1) {
                  //切换到省级区域
                  self.switch2AreaNode(routeFeatures[1].properties.adcode);
                } else {
                  //切换到全国
                  self.switch2AreaNode(100000);
                }
              }, {
                evelLimit: 2
              });
            });
            self.$data.districtExplorer = districtExplorer;
            self.switch2AreaNode(100000);
          });
        });
      },
      methods: {
        //切换区域后刷新显示内容
        refreshAreaNode(areaNode) {
          const districtExplorer = this.districtExplorer;
          districtExplorer.setHoverFeature(null);
          this.renderAreaPolygons(areaNode);
        },
        //加载区域
        loadAreaNode(adcode, callback) {
          const self = this;
          const currentAreaNode = this.currentAreaNode;
          const districtExplorer = this.districtExplorer;

          districtExplorer.loadAreaNode(adcode, function(error, areaNode) {
            if (error) {
              if (callback) {
                callback(error);
              }
              return;
            }

            const adcode = areaNode.getAdcode();
            const geoJSON = areaNode.getSubFeatures(); // 获取 geoJSON 数据
            const name = areaNode.getName();
            if (!geoJSON || currentAreaNode && ('' + currentAreaNode.getAdcode() === '' + adcode)) {
              return;
            }

            const mapData = {
              type: 'FeatureCollection',
              features: geoJSON
            };
            // 构造虚拟数据
            const userData = [];
            for (let i = 0; i < geoJSON.length; i++) {
              const name = geoJSON[i].properties.name;
              userData.push({
                name: name,
                value: Math.round(Math.random() * 1000),
              });
            }

            const ds = new DataSet();
            const geoDataView = ds.createView().source(mapData, {
              type: 'GeoJSON',
            }); // geoJSON 经纬度数据

            // 用户数据
            const dvData = ds.createView().source(userData);
            dvData.transform({
              type: 'geo.region',
              field: 'name',
              geoDataView: geoDataView,
              as: ['longitude', 'lantitude'],
            });

            self.$data.geoData = geoDataView;
            self.$data.data = dvData;
            self.$data.name = name;


            if (callback) {
              callback(null, areaNode);
            }
          });
        },
        //绘制某个区域的边界
        renderAreaPolygons (areaNode) {
          const districtExplorer = this.districtExplorer;
          const node = _.cloneDeep(areaNode);
          districtExplorer.clearFeaturePolygons();
          districtExplorer.renderSubFeatures(node, function(feature, i) {
            const fillColor = colors[i % colors.length];
            const strokeColor = colors[colors.length - 1 - i % colors.length];

            return {
              cursor: 'default',
              bubble: true,
              strokeColor: strokeColor, //线颜色
              strokeOpacity: 1, //线透明度
              strokeWeight: 1, //线宽
              fillColor: fillColor, //填充色
              fillOpacity: 0.35, //填充透明度
            };
          });

          //绘制父区域
          districtExplorer.renderParentFeature(node, {
            cursor: 'default',
            bubble: true,
            strokeColor: 'black', //线颜色
            strokeOpacity: 1, //线透明度
            strokeWeight: 1, //线宽
            fillColor: null, //填充色
            fillOpacity: 0.35, //填充透明度
          });
        },
        //切换区域
        switch2AreaNode (adcode, callback = null) {
          const self = this;
          const currentAreaNode = self.currentAreaNode;
          if (currentAreaNode && ('' + currentAreaNode.getAdcode() === '' + adcode)) {
            return;
          }

          self.loadAreaNode(adcode, function(error, areaNode) {
            if (error) {
              if (callback) {
                callback(error);
              }
              return;
            }
            window.currentAreaNode = areaNode;

            self.$data.currentAreaNode = areaNode;
            self.refreshAreaNode(areaNode);
            if (callback) {
              callback(null, areaNode);
            }
          });
        },
      },
    }
</script>

<style scoped>
  .title{
    font-size: 14px;
    text-align: center;
    color: rgb(37, 243, 230);
    font-weight: 700;
  }
</style>
