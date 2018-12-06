<template>
    <div class="fy-table">
      <div class="table-header">
          <div>可招商</div>
          <i class="el-icon-more"></i>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%;border: 1px solid #e0e0e0;background-color: #fff;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;"
        height="650"
        :default-sort = "{prop: 'lc', order: 'descending'}">
        <el-table-column
          prop="name"
          label="楼宇名称"
          width="178">
        </el-table-column>
        <el-table-column
          prop="lc"
          label="楼层"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="fh"
          label="房号"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="yqdj"
          label="预期单价"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="zx"
          label="装修"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="dw"
          label="单位"
          width="178">
            <template slot-scope="scope">
              {{scope.row.dw}}
              <div class="fydetails-div">
                <el-button plain class="fydetails-button" @click.stop="open01()"><i class="el-icon-plus"></i>合同</el-button>
                <htDialog ref="openOrder" v-if="openOrderVisible" :visible.sync="openOrderVisible"></htDialog>
                <el-button plain class="fydetails-button" @click.stop="open02()"><i class="el-icon-plus"></i>编辑房源</el-button>

              </div>                           
            </template>  
        </el-table-column>
        <el-table-column
          prop="mj"
          label="面积"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="gw"
          label="工位"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="房源标签"
          :filters="[{ text: '朝南', value: '朝南' }, { text: '朝北', value: '朝北' }, { text: '有窗', value: '有窗' }, { text: '自用', value: '自用' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              type="primary" plan
              disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
import htDialog from '@/components/hetongAdmin/htDialog'
import fyDialog from '@/components/fangyuanAdmin/fyDialog'

export default {
  name: 'fy01',
  components:{
    htDialog,fyDialog
  },
  data () {
    return {
      openOrderVisible: false,
      tableData: [{
          name: '003',
          lc: '01',
          fh: '01',
          yqdj: '- 元/㎡·天',
          zx: '精装',
          dw: '元/㎡·天',
          mj: '1,000.00',
          gw: '',
          tag: '朝南'
        }, {
          name: '002',
          lc: '02',
          fh: '01',
          yqdj: '- 元/㎡·天',
          zx: '精装',
          dw: '元/㎡·天',
          mj: '1,000.00',
          gw: '',
          tag: '朝北'
        }, {
          name: '005',
          lc: '03',
          fh: '01',
          yqdj: '- 元/㎡·天',
          zx: '精装',
          dw: '元/㎡·天',
          mj: '1,000.00',
          gw: '',
          tag: '有窗'
        }, {
          name: '001',
          lc: '04',
          fh: '01',
          yqdj: '- 元/㎡·天',
          zx: '精装',
          dw: '元/㎡·天',
          mj: '1,000.00',
          gw: '',
          tag: '自用'
        }
      ]
    }
  },
  methods: {
    filterTag(value, row) {
      return row.tag === value;
    },
    open01(){
      this.openOrderVisible= true;
    }
  }
}
</script>

