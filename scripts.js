function markdownparser(input) {
    const htmloutput = input
        //headers
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
        //bold
        .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
        //italics
        .replace(/\*(.*)\*/gim, '<i>$1</i>')
        //image
        .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt=$1 src=$2 />')
        //link
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")

    return htmloutput.trim();

}

/*const debounce = (fn, delay) => {
    let timeoutid;
    return function(...args) {
        if (timeoutid)
            clearTimeout(timeoutid);

        timeoutid = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

let input = document.getElementById('textareainput');
input.addEventListener("keyup", debounce(e => {
    result = markdownparser(input);
    document.getElementById('textareaoutput').innerHTML = result;
}, 3000)) */

const debounce = (fn, delay) => {
    let timeoutid;
    return function(...args) {
        if (timeoutid) {
            clearTimeout(timeoutid);
        }

        timeoutid = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

let debouncefunc = () => {
    result = markdownparser(input);
    document.getElementById('textareaoutput').innerHTML = result;
}

input = document.getElementById('textareainput');
input.addEventListener("keyup", debounce(debouncefunc, 3000))