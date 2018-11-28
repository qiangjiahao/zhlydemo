<template>
    <div class="fy-table">
      <div class="table-header">
          <div>已租房源</div>
          <i class="el-icon-more"></i>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%;border: 1px solid #e0e0e0;background-color: #fff;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;"
        height="650">
        <el-table-column
          prop="name"
          label="楼宇名称"
          width="149">
        </el-table-column>
        <el-table-column
          prop="lc"
          label="楼层"
          sortable
          width="150">
        </el-table-column>
        <el-table-column
          prop="fh"
          label="房号"
          sortable
          width="150">
        </el-table-column>
        <el-table-column
          prop="zx"
          label="装修"
          width="150">
        </el-table-column>
        <el-table-column
          prop="mj"
          label="面积"
          sortable
          width="150">
        </el-table-column>
        <el-table-column
          prop="gw"
          label="工位"
          sortable
          width="150">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="房源标签"
          :filters="[{ text: '朝南', value: '朝南' }, { text: '朝北', value: '朝北' }, { text: '有窗', value: '有窗' }, { text: '自用', value: '自用' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
          width="150">
          <template slot-scope="scope">
            <el-tag
              type="primary" plan
              disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="zk"
          label="租客"
          width="150">
        </el-table-column>
        <el-table-column
          prop="jzr"
          label="计租日"
          width="200">
        </el-table-column>
        <el-table-column
          prop="jsr"
          label="结束日"
          width="200">
        </el-table-column>
        <el-table-column
          prop="htdj"
          label="合同单价"
          width="150">
        </el-table-column>
        <el-table-column
          prop="htdjdw"
          label="合同单价单位"
          width="150">
        </el-table-column>
        <el-table-column
          prop="htdjdw"
          label="合同单价单位"
          width="150">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: 'fy02',
  data () {
    return {
      tableData: [{
          name: '003',
          lc: '01',
          fh: '01',
          zx: '-',
          mj: '100.00',
          gw: '',
          tag: '',
          zk: '西安希网信息科技有限公司',
          jzr: '2018-11-05',
          jsr: '2019-11-05',
          htdj: '20.00 元/㎡·天',
          htdjdw: '元/㎡·天',
          ssdj: '0.66元/㎡·天'
        }, {
          name: '002',
          lc: '01',
          fh: '01',
          zx: '-',
          mj: '100.00',
          gw: '',
          tag: '',
          zk: '西安希网信息科技有限公司',
          jzr: '2018-11-05',
          jsr: '2019-11-05',
          htdj: '20.00 元/㎡·天',
          htdjdw: '元/㎡·天',
          ssdj: '0.66元/㎡·天'
        }, {
          name: '001',
          lc: '01',
          fh: '01',
          zx: '-',
          mj: '100.00',
          gw: '',
          tag: '',
          zk: '西安希网信息科技有限公司',
          jzr: '2018-11-05',
          jsr: '2019-11-05',
          htdj: '20.00 元/㎡·天',
          htdjdw: '元/㎡·天',
          ssdj: '0.66元/㎡·天'
        }, {
          name: '004',
          lc: '01',
          fh: '01',
          zx: '-',
          mj: '100.00',
          gw: '',
          tag: '',
          zk: '西安希网信息科技有限公司',
          jzr: '2018-11-05',
          jsr: '2019-11-05',
          htdj: '20.00 元/㎡·天',
          htdjdw: '元/㎡·天',
          ssdj: '0.66元/㎡·天'
        }
      ]
    }
  },
  methods: {
    filterTag(value, row) {
      return row.tag === value;
    }
  }
}
</script>

