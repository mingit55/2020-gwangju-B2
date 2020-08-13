location.getQueryString = function() {
    let idx = this.search.indexOf("?");
    let search = this.search.substr(idx + 1);
    return search.split("&").reduce((obj, item) => {
        let split = item.split("=");
        obj[split[0]] = split[1];
        return obj;
    }, {})
};

$(function(){
    $("[data-target='#road-modal']").on("click", e => {
        e.preventDefault();
        let timeout = false;
        fetch("/location.php")
            .then(res => res.text())
            .then(resText => {
                if(!timeout) {
                    $("#road-modal .modal-body").html( $(resText) );
                    $("#road-modal").modal("show");
                }
            });
        setTimeout(() => {
            timeout = true;
            alert("돌아오는 길을 표시할 수 없습니다.");
        }, 1000);
    });
});