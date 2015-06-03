const JST = {};
JST["PhotoTpl"] = (model) => `
<div class="photo ${model.upvote ? 'upvoted' : ''}">
    <img src="${model.url}" />
    <button action="upvote" class="btn btn-default btn-circle"><i class="glyphicon glyphicon-ok"></i></button>
</div>
`;

JST["AppTpl"] = () => `
<figure class="text-center">
    <section photo></section>
    <button action="next" class="btn btn-default btn-circle"><i class="glyphicon glyphicon-arrow-right"></i></button>
</figure>
`

export default JST;
