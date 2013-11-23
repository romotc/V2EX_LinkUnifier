var topicContents = Array.prototype.slice.call(document.getElementsByClassName("topic_content"));
var replyContents = Array.prototype.slice.call(document.getElementsByClassName("reply_content"));

function replaceAnchors(topicContent) {
    var anchors = Array.prototype.slice.call(topicContent.getElementsByTagName("a"));
    console.log(anchors);
    anchors.forEach(function(anchor) {
        anchor.innerHTML = anchor.innerHTML.replace(/(http|https):\/\/(|.*\.)v2ex\.com(\/t\/\d+)/i, "$3");
        anchor.href = anchor.href.replace(/(http|https):\/\/(|.*\.)v2ex\.com(\/t\/\d+)/i, "$3");
    });
}

topicContents.forEach(replaceAnchors);
replyContents.forEach(replaceAnchors);
