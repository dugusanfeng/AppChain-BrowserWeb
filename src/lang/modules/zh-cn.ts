import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
export default {
    menu: { // 菜单
        home: '首页',
        blockChain: '区块链',
        blockChainItem:{
            viewTxns: '查看交易',
            viewPendingTxns: '查看待处理交易',
            viewBlocks: '查看区块'
        },
        node: '节点',
        more: '更多',
        moreItem: {
            wallet: '钱包',
            help: '开发帮助'
        }
    },
    search: {
        searchBtn: '查询',
        placeHolder: ' 请输入区块高度/地址/块哈希/交易哈希'
    },
    breadcrumb: {
        walletWatermark: '钱包',
        home: '首页',
        wallet: '钱包'
    },
    footer: {
        desc: 'XXXX是PlatON区块链资源管理与分析平台',
        links: '链接',
        help: '开发帮助',
        wallet: '钱包',
        officialWebsite: 'PlatON官网',
        whitePaper: '白皮书',
        community: '社区'
    },
    wallet: {
        officeWallet: '官方钱包',
        download: '下载链接',
        developer: '开发者网站',
        thirdPartyWallet: '第三方钱包',
        nothirdPartyWallet: '无第三方钱包，请点击',
        submitBtn: '提交'
    },
    tradeAbout:{
        morethen:'总共寻获超过',
        transactions:'交易',
        transactions1:'交易',
        record:'显示最新500k记录',
        hash:'交易哈希值',
        block:'区块',
        age:'块龄',
        from:'发送方',
        to:'接收方',
        value:'数额',
        fee:'交易费用',
        before:'前',
        txInfo:'交易信息',
        viewLeft:'查看前一个交易',
        viewRight:'查看后一个交易',
        information:'Transaction Information',
        timestamp:'时间戳',
        txHash:'交易hash',
        txReceiptStatus:'状态',
        actualTxCost:'交易费用',
        energonLimit:'能量限制',
        energonUsed:'消耗的能量',
        energonPrice:'能量价格',
        blockHeight:'区块高度',
        inputData:'发出数据',
        confirmNum:'区块确认',
        success:'成功',
        fail:'失败'
    },
    tradePendingAbout: {
        address:'地址',
        morethen: '总共寻获',
        transactions: '待处理交易',
        transactions1:'待处理交易',
        hash: '交易哈希值',
        age: '停留时间',
        from: '发送方',
        to: '接收方',
        value: '数额',
        fee: '交易费用',
        before: '前',
        txInfo: '交易信息',
        viewLeft: '查看前一个交易',
        viewRight: '查看后一个交易',
        information: 'Transaction Information',
        pending:'待处理',
        timestamp: '交易接收时间',
        txHash: '交易hash',
        energonLimit: '能量限制',
        energonUsed: '消耗的能量',
        energonPrice: '能量价格',
        blockHeight: '区块',
        inputData: '发出数据',
        expectTime:'预计确认时间',
        energonPrice1:'能量价值'
    },
    blockAbout: {
        address:'地址',
        morethen: '总共',
        block: '区块',
        height:'区块高度',
        age:'块龄',
        transaction :'交易数',
        size:'区块大小',
        miner:'出块节点',
        energonUsed:'能量消耗',
        energonAverage:'平均能量价值',
        blockReward:'奖励',
        before:'前',
        info:'区块信息',
        viewLeft:'查看前一个区块',
        viewRight:'查看后一个区块',
        information:'Block Information',
        height1:'区块高度',
        timestamp:'时间戳',
        transactions:'交易',
        hash:'区块哈希',
        parentHash:'上一区块哈希',
        energonLimit:'能量限制',
        blockReward1:'区块奖励',
        extraData:'额外数据',
        in:'{timeDiff}秒内',
        txHash:'交易哈希值',
        transactionBlock:'交易-区块',
        actualTxCost:'交易费用',
        from:'发送方',
        to:'接收方',
        value:'数额',
    },
    totalInfo:{
        info:'地址信息',
        overview:'概览',
        balance:'余额',
        transactions:'交易',
        votes:'投票',
        votesNodes:'投票节点数',
        votesStaked:'投票质押',
        pendtransaction:'个待处理交易',
        download:'下载',
        txHash:'交易哈希值',
        blockTime:'确认时间',
        pending:'待处理',
        txType:'类型',
        from:'发送方',
        to:'接收方',
        value:'数额',
        actualTxCost:'交易费用',
        info1:'合约详情',
        else:'其他',
        contractcreator:'合约开发者',
        contractowner:'合约拥有者',
    },
    download:{
        info:'下载数据',
        title:'下载当前地址的交易\出块记录，在下载之前，请验证您是否是机器人！',
        date:'数据日期',
        placeholder:'选择日期',
        download:'下载',
        placeholder1:'请选择日期',
        robot:'请验证您是否是机器人！'
    },
    elseInfo:{
        transfer:'转账',
        vote:'投票',
        contractCreate:'合约创建',
        transactionExecute:'合约执行',
        MPCtransaction :'MPC交易',
        authorization:'权限',
        contract:'合约',
        create:'合约创建',
        count:'实时',
        hour:'时',
        minutes:'分',
        seconds:'秒',
        day:'天',
        loading:'拼命加载中'
    },
    modalInfo:{
        copysuccess:'已复制到剪贴板',
        copyfail:'复制失败'
    },
    breadCrumb:{
        pending:'待处理交易',
        trade:'交易',
        block:'区块'
    },
    indexInfo:{
        blockHeight:'当前区块高度',
        node:'出块节点',
        currentTransaction:'当前交易笔数',
        consensusNodeAmount:'共识节点数',
        addressAmount:'地址数',
        voteAmount:'投票数',
        proportion:'占比',
        ticketPrice:'票价',
        timeandnum:'出块时间及交易数量',
        avgTime:'平均出块时长',
        current:'当前',
        maxTps:'最大交易TPS',
        avgTransaction:'平均区块交易数',
        transactionsperday:'每日交易笔数',
        monitor:'过去24小时交易笔数实时统计',
        blocks:'最新区块',
        height:'区块高度',
        age:'块龄',
        txn:'交易数',
        blockReward:'奖励',
        transactions:'最新交易',
        txhash:'交易哈希',
        before: '前',
        realtime: '实时',
        view:'查看全部',
        searchno:'查询无结果！',
        cancel:'取消'
    },
    ...zhLocale
}
