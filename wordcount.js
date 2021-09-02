//finding the number of words and characters
document
    .querySelector("#textareainput")
    .addEventListener("keyup", function countWord() {
        let res = [];
        let char_count = 0;
        let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
        str.map((s) => {
            let trimStr = s.trim();
            if (trimStr.length > 0) {
                res.push(trimStr);
                char_count += trimStr.length;
            }
        });
        document.querySelector("#show_words").innerText = res.length;
        document.querySelector("#show_char").innerText = char_count;

    });