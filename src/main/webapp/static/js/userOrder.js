$(document).ready(function() {

    //��Ⱦ��ʾ�����ı��
    function doTable(url){
        // alert(url);
        $('#userOrderInfoTable').bootstrapTable('destroy');   //��̬���ر��֮ǰ�������ٱ��
        $("#userOrderInfoTable").bootstrapTable({ // ��Ӧtable��ǩ��id
            url:url, // ��ȡ������ݵ�url
            method: "post",
            contentType:'application/json',
            cache: false, // ����Ϊ false ���� AJAX ���ݻ��棬 Ĭ��Ϊtrue
            striped: true,  //�����ʾ���ƣ�Ĭ��Ϊfalse
            pagination: true, // �ڱ��ײ���ʾ��ҳ�����Ĭ��false
            pageList: [10, 20], // ����ÿҳ����ʾ����������
            pageSize: 10, // ҳ����������
            pageNumber: 1, // ��ҳҳ��
            sidePagination: 'server', // ����Ϊ�������˷�ҳ
            sortable: true,          //������
            sortName: 'add_id', // Ҫ������ֶ�
            sortOrder: 'asc', // �������
            queryParams:function(params){
                //alert(JSON.stringify(queryData));
                var param = {
                    pageSize: params.limit, // ÿҳҪ��ʾ����������
                    offset: params.offset, // ÿҳ��ʾ���ݵĿ�ʼ�к�(0��ʼ)
                    sort: params.sort, // Ҫ������ֶ�
                    sortOrder: params.order, // �������
                };
                return param;
            },
            columns:
                [
                    {
                        field: 'name', // ����json�����е�name
                        title: '�ջ���', // ����ͷ��ʾ����
                        align: 'center', // ���Ҿ���
                        valign: 'middle', // ���¾���
                        width: '100',
                    }, {
                    field: 'tel',
                    title: '�绰����',
                    align: 'center',
                    valign: 'middle',
                    width: '100',
                }, {
                    field: 'postcode',
                    title: '�ʱ�',
                    align: 'center',
                    valign: 'middle',
                    width: '100',
                }, {
                    field: 'province',
                    title: 'ʡ��',
                    align: 'center',
                    valign: 'middle',
                    width: '100',
                }, {
                    field: 'addr',
                    title: '��ַ',
                    align: 'center',
                    valign: 'middle',
                    width: '200',
                },{
                    field: 'add_id',
                    title: '��ַid',
                    align: 'center',
                    valign: 'middle',
                    visible:false,
                }, {
                    title: "����",
                    align: 'center',
                    valign: 'middle',
                    width: '70',
                    formatter:function(value, row, index){

                        return "<button class='btn btn-default btn-xs delAddr' add_id='"+row.add_id+"'><span class='glyphicon glyphicon-exclamation-sign'></span>ɾ��</button><br/><button class='btn btn-default btn-xs editAddr' add_id='"+row.add_id+"'><span class='glyphicon glyphicon-pencil'></span>�޸�</button>";
                    }
                }
                ],

        })
    }
    //δ��λ��ѯǰ���趨�����ʾ����
    doTable("FrontManageOrder/seeAllOrder");
});