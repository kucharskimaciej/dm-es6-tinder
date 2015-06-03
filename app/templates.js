const JST = {};
JST["PhotoTpl"] = (model) => `
<div class="photo ${model.upvote ? 'upvoted' : ''}">
    <img src="${model.url}" /><button action="upvote">Upvote</button>
</div>
`;

JST["AppTpl"] = () => `
<figure>
    <section photo></section>
    <button action="next">NEXT</button>
</figure>
`

export default JST;
