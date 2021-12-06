console.log(new Date())

$.ajax({
    url: '/api/list',
    success(result) {
        // 1.方法一
        /* let listNode = '<ul>'
        result.data.forEach(item => {
            listNode += `<li>${item}</li>`
        })
        listNode += '</ul>'
        $('#list').html(listNode) */

        // console.log(data);

        // 2.方法二
        /* let content = `
        <ul>
            {{each data}}
                <li>{{$value}}</li>
            {{/each}}
        </ul>
        `
        let listNode = template.render(content, { data: result.data })
        $('#list').html(listNode) */

        $('#list').html(result)
    }
})