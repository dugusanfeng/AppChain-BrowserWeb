import enLocale from 'element-ui/lib/locale/lang/en'
export default {
    menu: { // 菜单
        home:'Home',
        blockChain: 'BlockChain',
        blockChainItem:{
                viewTxns: 'ViewTxns',
                viewPendingTxns: 'View Pending Txns',
                viewBlocks: 'View Blocks'
            },
        node: 'Node',
        more: 'More',
        moreItem: {
            wallet: 'Wallet',
            help: 'Help'
        }
    },
    search: {
        searchBtn: 'Search',
        placeHolder: 'Search by block height /Address/Block hash/Txhash'
    },
    breadcrumb: {
        walletWatermark: 'Wallet',
        home: 'Home',
        wallet: 'Wallet'
    },
    footer: {
        desc: 'XXXX is a Block Explorer and Analytics Platform for PlatON',
        links: 'Links',
        help: 'Help',
        wallet: 'Wallet',
        officialWebsite: 'PlatON Official Website',
        whitePaper: 'White Paper',
        community: 'Community'
    },
    wallet: {
        officeWallet: 'Office Wallet',
        download: 'Download',
        developer: 'Developer',
        thirdPartyWallet: 'Third-PartyWallet',
        nothirdPartyWallet: 'No third-Party Wallet,click',
        submitBtn: 'Submit'
    },
    tradeAbout: {
        morethen: 'More Than',
        transactions: 'Transactions',
        transactions1:'Transactions Found',
        record: 'Showing The Last 500k Records',
        hash: 'TxHash',
        block: 'Block',
        age: 'Age',
        from: 'From',
        to: 'To',
        value: 'Value',
        fee: 'TxFee',
        before: 'ago',
        txInfo: 'Tx Info',
        viewLeft: 'View the previous transaction',
        viewRight: 'View the latter transaction',
        information: 'Transaction Information',
        timestamp: 'Time Stamp',
        txHash: 'Txhash',
        txReceiptStatus: 'TxReceipt Status',
        actualTxCost: 'Tx Cost/Fee',
        energonLimit: 'Energon Limit',
        energonUsed: 'Energon Used By Transaction',
        energonPrice: 'Energon Price',
        blockHeight: 'Block Height',
        inputData: 'Input Date',
        confirmNum: 'Block Confirmations'
    },
    tradePendingAbout: {
        address:'Address',
        morethen: 'Total ',
        transactions: 'Pending Transactions',
        transactions1:' Pending Transactions Found',
        hash: 'TxHash',
        age: 'Age',
        from: 'From',
        to: 'To',
        value: 'Value',
        fee: 'Tx Cost/Fee',
        before: 'ago',
        txInfo: 'Tx Info',
        viewLeft: 'View the previous transaction',
        viewRight: 'View the latter transaction',
        information: 'Transaction Information',
        pending:'Pending',
        timestamp: 'Receiving Time',
        txHash: 'TxHash',
        energonLimit: 'Energon Limit',
        energonUsed: 'Energon Used By Transaction',
        energonPrice: 'Energon Price',
        blockHeight: 'Block Height',
        inputData: 'Input Data',
        expectTime:'Estimated Confirmation Duration',
        energonPrice1:'Energon Price'
    },
    blockAbout: {
        address:'地址',
        morethen: 'Total ',
        block: 'Blocks',
        height:'Height',
        age:'Age',
        transaction :'Txn',
        size:'Size',
        miner:'Producer',
        energonUsed:'Energon Used',
        energonAverage:'Avg.EnergonPrice',
        blockReward:'Reward',
        before:' ago',
        info:'Block Info',
        viewLeft:'View the previous block',
        viewRight:'View the latter block',
        information:'Block Information',
        height1:'Height',
        timestamp:'TimeStamp',
        transactions:'Transactions',
        hash:'Block Hash',
        parentHash:'Parent Hash',
        energonLimit:'Energon Limit',
        blockReward1:'Block Reward',
        extraData:'Extra Data',
        in:'in {timeDiff}s',
        txHash:'TxHash',
        transactionBlock:'Transactions-Block',
        actualTxCost:'TxFee',
        from:'From',
        to:'To',
        value:'Value',
    },
    totalInfo:{
        info:'Address Info',
        overview:'Overview',
        balance:'Balance',
        transactions:'Transactions',
        votes:'Votes',
        votesNodes:'Vote Nodes',
        votesStaked:'Vote Staked',
        pendtransaction:'pending Transactions',
        download:'Download ',
        txHash:'TxHash',
        blockTime:'Time',
        pending:'Pending',
        txType:'Type',
        from:'From',
        to:'To',
        value:'Value',
        actualTxCost:'TxFee',
        info1:'Contract Info',
        else:'Other',
        contractcreator:'Contract Creator',
        contractowner:'Contract Owner',
    },
    download:{
        info:'Download Data',
        title:'Download the current address of the transaction ,Before downloading, please verify if you are a robot!',
        date:'Date Date',
        placeholder:'选择日期',
        download:'Download',
        placeholder1:'请选择日期',
        robot:'请验证您是否是机器人！'
    },
    elseInfo: {
        transfer:'Transfer',
        vote:'Vote',
        contractCreate:'Contract Create',
        transactionExecute:'Contract Execute',
        MPCtransaction :'MPC',
        authorization:'Authorization',
        contract:'Contract',
        create:'Contract Create',
        count:'try',
        hour:'h ',
        minutes:'m ',
        seconds:'s ',
        day:'d '
    },
    modalInfo:{
        copysuccess:'Copied to clipboard',
        copyfail:'Copy the failure'
    },
    breadCrumb: {
        pending: 'Pending Transactions',
        trade: 'Transactions',
        block: 'Blocks'
    },
    indexInfo: {
        blockHeight: 'Block Height',
        node: 'Producer',
        currentTransaction: 'Total Transactions',
        consensusNodeAmount: 'Consensus Nodes',
        addressAmount: 'Total Address',
        voteAmount: 'Votes',
        proportion: 'Ratio',
        ticketPrice: 'Vote Price',
        timeandnum: 'Block Time And Number Of Transactions',
        avgTime: 'Average Block Time',
        current: 'Current',
        maxTps: 'Max TPS',
        avgTransaction: 'Average Block Txns',
        transactionsperday: 'Transactions Per Day',
        monitor: 'The number of bitcoin transactions in the last 24 hours',
        blocks: 'Blocks',
        height: 'Block Height',
        age: 'Age',
        txn: 'Txn',
        blockReward: 'Reward',
        transactions: 'Transactions',
        txhash: 'TxHash',
        before:'ago'
    },
    ...enLocale
}
