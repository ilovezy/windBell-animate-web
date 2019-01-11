<template>
  <div class="login-container">
    <h1 style='text-align: center;'>日发金融合约明细</h1>
    <div style='padding: 15px 50px 100px'>
      <table class='el-table el-table--fit el-table--border el-table--enable-row-hover
      el-table--enable-row-transition'
      cellpadding="0"
      cellspacing="0">

        <col width="80"
             class="xl66"
             style='mso-width-source:userset;mso-width-alt:2560;'/>
        <col width="105.07"
             class="xl67"
             style='mso-width-source:userset;mso-width-alt:3362;'/>
        <col width="70"
             class="xl67"
             style='mso-width-source:userset;mso-width-alt:2240;'/>
        <col width="149.07"
             class="xl67"
             style='mso-width-source:userset;mso-width-alt:4770;'/>
        <col width="88"
             class="xl67"
             style='mso-width-source:userset;mso-width-alt:2816;'/>
        <col width="165.07"
             class="xl67"
             style='mso-width-source:userset;mso-width-alt:5282;'/>
        <col width="104"
             class="xl67"
             style='mso-width-source:userset;mso-width-alt:3328;'/>
        <col width="110"
             class="xl67"
             style='mso-width-source:userset;mso-width-alt:3520;'/>
        <col width="0"
             class="xl67"
             style='display:none;mso-width-source:userset;mso-width-alt:3810;'/>

        <col width="113.07"
             class="xl67"
             style='mso-width-source:userset;mso-width-alt:3618;'/>
        <col width="104"
             class="xl67"
             style='mso-width-source:userset;mso-width-alt:12928;'/>
        <col width="233.07"
             class="xl67"
             style='mso-width-source:userset;mso-width-alt:4258;'/>
        <col width="172"
             span="16371"
             class="xl67"
             style='mso-width-source:userset;mso-width-alt:2304;'/>
        <tr height="24"
            style='height:18.00pt;mso-height-source:userset;mso-height-alt:360;'>
          <td class="xl69  spe-text"
              height="24"
              style='height:18.00pt;'>换算
          </td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl82"></td>
        </tr>
        <tr height="24"
            style='height:18.00pt;mso-height-source:userset;mso-height-alt:360;'>
          <td class="xl69"
              height="24"
              style='height:18.00pt;'></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl70"></td>
          <td class="xl82"></td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl69 spe-text"
              height="28"
              style='height:21.00pt;'>类型
          </td>
          <td class="xl70">产品名称</td>
          <td class="xl70">代码</td>
          <td class="xl70">合约大小</td>
          <td class="xl70">手续费</td>
          <td class="xl70">最小波动</td>
          <td class="xl70">交易保证金</td>
          <td class="xl70">强平风险度</td>
          <td class="xl70">隔夜保证金/手</td>
          <td class="xl70">隔周保证金/手</td>
          <td class="xl70">交易时间</td>
          <td class="xl75">强平时间</td>
        </tr>
        <tr height="28"
            class="xl65"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl69 spe-text"
              height="84"
              rowspan="3"
              style='height:63.00pt;'>能源期货
          </td>
          <td class="xl71">原油</td>
          <td class="xl71">CL</td>
          <td class="xl71">1，000桶</td>
          <td class="xl71"
              rowspan="6"
              style=''>34美金
          </td>
          <td class="xl71">0.01=10美金</td>
          <td class="xl71">300美金</td>
          <td class="xl72"
              rowspan="27"
              style=''>风险率大于等于150%
          </td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
          <td class="xl73"
              rowspan="6"
              style=''>06：00-05:00（夏令时）<br/><br/>07:00-06：00（冬令时）
          </td>
          <td class="xl83"
              rowspan="6"
              style=''>4:50（夏令时）<br/><br/>5:50（冬令时）
          </td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl71">小原油</td>
          <td class="xl71">QM</td>
          <td class="xl71">500桶</td>
          <td class="xl71">0.025=12.50美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl71">天然气</td>
          <td class="xl71">NG</td>
          <td class="xl71">10,000百万英国热量</td>
          <td class="xl71">0.001=10美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl69 spe-text"
              height="84"
              rowspan="3"
              style='height:63.00pt;'>金属期货
          </td>
          <td class="xl71">纽约金/美黄金</td>
          <td class="xl71">GC</td>
          <td class="xl71">100金衡盎司</td>
          <td class="xl71">0.1=10美金</td>
          <td class="xl71">450美金</td>
          <td class="xl71">1500美金</td>
          <td class="xl71">2200美金</td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl71">美白银</td>
          <td class="xl71">SI</td>
          <td class="xl71">5000金衡盎司</td>
          <td class="xl71">0.005=25美金</td>
          <td class="xl71">450美金</td>
          <td class="xl71">1500美金</td>
          <td class="xl71">2200美金</td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl71">美精铜</td>
          <td class="xl71">HG</td>
          <td class="xl71">25,000磅</td>
          <td class="xl71">0.0005=12.5美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
        </tr>
        <tr height="49.27"
            style='height:36.95pt;mso-height-source:userset;mso-height-alt:739;'>
          <td class="xl69 spe-text"
              height="341.67"
              rowspan="9"
              style='height:256.25pt;'>指数期货
          </td>
          <td class="xl71">H股指数</td>
          <td class="xl71">HHI</td>
          <td class="xl71">50港币</td>
          <td class="xl71">200港币</td>
          <td class="xl71">1=50港币</td>
          <td class="xl71">300美金</td>
          <td class="xl71">不能隔夜</td>
          <td class="xl71">不能隔周</td>
          <td class="xl73"
              rowspan="4"
              style=''>
            09:15-12:00；13:00-16:30<br/>17:15-01：00
          </td>
          <td class="xl71"
              rowspan="4"
              style=''>16：15/0:45
          </td>
        </tr>
        <tr height="53.27"
            style='height:39.95pt;mso-height-source:userset;mso-height-alt:799;'>
          <td class="xl71">小H股</td>
          <td class="xl71">MCH</td>
          <td class="xl71">10港币</td>
          <td class="xl73">200港币</td>
          <td class="xl71">1=10港币</td>
          <td class="xl71">300美金</td>
          <td class="xl71">不能隔夜</td>
          <td class="xl71">不能隔周</td>
        </tr>
        <tr height="41.80"
            class="xl65"
            style='height:31.35pt;mso-height-source:userset;mso-height-alt:627;'>
          <td class="xl71">恒指</td>
          <td class="xl71">HSI</td>
          <td class="xl71">50港币</td>
          <td class="xl71">200港币</td>
          <td class="xl71">1=50港币</td>
          <td class="xl71">450美金</td>
          <td class="xl71">不能隔夜</td>
          <td class="xl71">不能隔周</td>
        </tr>
        <tr height="49.27"
            style='height:36.95pt;mso-height-source:userset;mso-height-alt:739;'>
          <td class="xl71">小恒指</td>
          <td class="xl71">MHI</td>
          <td class="xl71">10港币</td>
          <td class="xl73">150港币</td>
          <td class="xl71">1=10港币</td>
          <td class="xl71">300美金</td>
          <td class="xl71">不能隔夜</td>
          <td class="xl71">不能隔周</td>
        </tr>
        <tr height="49.27"
            style='height:36.95pt;mso-height-source:userset;mso-height-alt:739;'>
          <td class="xl71">德指</td>
          <td class="xl71">DAX</td>
          <td class="xl71">25欧元</td>
          <td class="xl71"
              rowspan="3"
              style=''>34美金
          </td>
          <td class="xl71">0.5=12.5欧元</td>
          <td class="xl71">600美金</td>
          <td class="xl71">不能隔夜</td>
          <td class="xl71">不能隔周</td>
          <td class="xl73">14:00-04:00（夏令时）<br/>08:15-05:00（冬令时）</td>
          <td class="xl73">3：45（夏令时）<br/>4：45（冬令时）</td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl71">小标普</td>
          <td class="xl71">ES</td>
          <td class="xl71">50美元</td>
          <td class="xl71">0.25=12.5美金</td>
          <td class="xl71">450美金</td>
          <td class="xl71"
              x:num>2500
          </td>
          <td class="xl71"
              x:num>3000
          </td>
          <td class="xl85"
              rowspan="3"
              style=''>06：00-05:00（夏令时）<br/><br/>07:00-06：00（冬令时）
          </td>
          <td class="xl85"
              rowspan="3"
              style=''>4：45（夏令时）<br/>5：45（冬令时）
          </td>
        </tr>
        <tr height="26.80"
            style='height:20.10pt;mso-height-source:userset;mso-height-alt:402;'>
          <td class="xl71">小纳指</td>
          <td class="xl71">NQ</td>
          <td class="xl71">20美元</td>
          <td class="xl71">0.25=5美金</td>
          <td class="xl71">450美金</td>
          <td class="xl71"
              x:num>2500
          </td>
          <td class="xl71"
              x:num>3000
          </td>
        </tr>
        <tr height="22"
            style='height:16.50pt;'>
          <td class="xl71">小道指</td>
          <td class="xl71">YM</td>
          <td class="xl71">25美元</td>
          <td class="xl71">34美金</td>
          <td class="xl74">1=5 美金</td>
          <td class="xl71">450美金</td>
          <td class="xl71"
              x:num>2500
          </td>
          <td class="xl71"
              x:num>3000
          </td>
        </tr>
        <tr height="22"
            style='height:16.50pt;'>
          <td class="xl71">A50</td>
          <td class="xl71">CN</td>
          <td class="xl71">2.5美元</td>
          <td class="xl71">34美金</td>
          <td class="xl74">2.5=2.5 美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">不能隔夜</td>
          <td class="xl71">不能隔周</td>
          <td class="xl88"><font class="font7"> </font><font class="font6">09:00-16:35;17：00-04:45</font></td>
          <td class="xl84"
              x:num="0.1875">4:30
          </td>
        </tr>
        <tr height="22"
            style='height:16.50pt;'>
          <td class="xl69 spe-text"
              height="184"
              rowspan="7"
              style='height:138.00pt;'>外汇期货
          </td>
          <td class="xl75">瑞士法郎</td>
          <td class="xl71">6S</td>
          <td class="xl71">CHF 125,000</td>
          <td class="xl71"
              rowspan="12"
              style=''>34美金
          </td>
          <td class="xl74">0.0001=12.5美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
          <td class="xl73"
              rowspan="7"
              style=''>06：00-05:00（夏令时）<br/><br/>07:00-06：00（冬令时）
          </td>
          <td class="xl85"
              rowspan="7"
              style=''>4:50（夏令时）<br/><br/>5:50（冬令时）
          </td>
        </tr>
        <tr height="22"
            style='height:16.50pt;'>
          <td class="xl75">新西兰元</td>
          <td class="xl71">6N</td>
          <td class="xl76">NZD 100,000</td>
          <td class="xl71">0.0001=10美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl71">欧元</td>
          <td class="xl71">6E</td>
          <td class="xl71">125,000欧元</td>
          <td class="xl71">0.00005=6.25美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl71">澳元</td>
          <td class="xl71">6A</td>
          <td class="xl71">100,000澳元</td>
          <td class="xl71">0.0001=10美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl71">英镑</td>
          <td class="xl71">6B</td>
          <td class="xl71">62,500英镑</td>
          <td class="xl71">0.0001=6.25美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl71">加元</td>
          <td class="xl71">6C</td>
          <td class="xl71">100,000加元</td>
          <td class="xl71">0.00005=5美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl71">日元</td>
          <td class="xl71">6J</td>
          <td class="xl71">12,500,000日元</td>
          <td class="xl71">0.0000005=6.25美金</td>
          <td class="xl71">450美金</td>
          <td class="xl71">1500美金</td>
          <td class="xl71">2200美金</td>
        </tr>
        <tr height="29.27"
            style='height:21.95pt;mso-height-source:userset;mso-height-alt:439;'>
          <td class="xl69 spe-text"
              height="134.07"
              rowspan="5"
              style='height:100.55pt;'>农产品期货
          </td>
          <td class="xl71">玉米</td>
          <td class="xl71">ZC</td>
          <td class="xl71">5,000蒲式耳</td>
          <td class="xl71">0.25=12.5美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
          <td class="xl85"
              rowspan="5"
              style=''>
            <span style='mso-spacerun:yes;'>&nbsp;</span>08:00 - 20:45；21:30 -
            02:20（夏令时）<br/><br/><span style='mso-spacerun:yes;'>&nbsp;</span>09:00 - 21:45；22:30 - 03:20（冬令时）
          </td>
          <td class="xl85"
              rowspan="5"
              style=''>2：10（夏令时）<br/><br/>3：10（冬令时）
          </td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl71">豆油</td>
          <td class="xl71">ZL</td>
          <td class="xl71">60，000磅</td>
          <td class="xl71">0.01=6美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
        </tr>
        <tr height="26.80"
            style='height:20.10pt;mso-height-source:userset;mso-height-alt:402;'>
          <td class="xl71">豆粕</td>
          <td class="xl71">ZM</td>
          <td class="xl71">100美吨</td>
          <td class="xl71">10=10美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
        </tr>
        <tr height="28"
            style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
          <td class="xl71">大豆</td>
          <td class="xl71">ZS</td>
          <td class="xl77">5,000蒲式耳</td>
          <td class="xl71">0.25=12.5美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
        </tr>
        <tr height="22"
            style='height:16.50pt;'>
          <td class="xl75">小麦</td>
          <td class="xl71">ZW</td>
          <td class="xl71">5,000蒲式耳</td>
          <td class="xl74">0.25=12.5美金</td>
          <td class="xl71">300美金</td>
          <td class="xl71">1200美金</td>
          <td class="xl71">1800美金</td>
        </tr>
        <tr height="18"
            style='height:13.50pt;'>
          <td class="xl78 spe-text"
              height="108"
              rowspan="6"
              style='height:81.00pt;'>其他说明
          </td>
          <td class="xl79  spe-text"
              colspan="12"
              rowspan="6"
              style=''>1、出入金固定汇率7.75（1美元=7.75人民币）<br/>2、每月第一周星期五非农数据（夏令时：20点15分---20点45分）；（冬令时21点15分---21点45分）30分钟内外汇期货类产品禁止开仓，提前开仓的保证金需提高至1500美金/手才能持仓过非农（如遇美国节假日非农数据顺延至下一周星期五）<br/>3、隔夜保证金相同的品种隔夜，如果隔夜保证金不足全部隔夜，系统会全部平仓。（例：原油和欧元各持仓1手，账户资金只够隔1手，系统会全部平仓）<br/>4、如有调整，以公司公告为准
          </td>
        </tr>
        <tr height="18"
            style='height:13.50pt;'/>
        <tr height="18"
            style='height:13.50pt;'/>
        <tr height="18"
            style='height:13.50pt;'/>
        <tr height="18"
            style='height:13.50pt;'/>
        <tr height="18"
            style='height:13.50pt;'/>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  }
</script>


<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  .spe-text {
    color: #50adff;
  }
  td{
    padding-left: 10px;
  }
</style>
