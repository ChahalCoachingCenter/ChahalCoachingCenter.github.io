function createInstagramEmbed(permalink) {
    const blockquote = document.createElement("blockquote");
    blockquote.classList.add("instagram-media");
    blockquote.dataset.instgrmPermalink = permalink;
    blockquote.dataset.instgrmCaptioned = "";
    blockquote.dataset.instgrmVersion = "14";

    const div = document.createElement("div");
    div.style.padding = "16px";

    const a = document.createElement("a");
    a.href = permalink;
    a.target = "_blank";
    a.style.background = "#ffffff";
    a.style.lineHeight = "0";
    a.style.padding = "0 0";
    a.style.textAlign = "center";
    a.style.textDecoration = "none";
    a.style.width = "100%";

    // ... Add other content and elements as needed for styling and layout

    div.appendChild(a);
    blockquote.appendChild(div);
    return blockquote;
}

const container = document.querySelector(".insta-container");

const permalinks = [
    "https://www.instagram.com/p/CsftFqhNOgv/?utm_source=ig_embed&utm_campaign=loading",
    "https://www.instagram.com/p/CsftJ9VtdWr/?utm_source=ig_embed&utm_campaign=loading",
    "https://www.instagram.com/p/CsfsOSCthXW/?utm_source=ig_embed&utm_campaign=loading"
];

permalinks.forEach(permalink => {
    const embed = createInstagramEmbed(permalink);
    container.appendChild(embed);
});

let read_more_reviews = () => {
    window.location.href = 'https://www.google.com/search?hl=en-IN&gl=in&q=Chahal+Coaching+Center-C3,+RZ+71,+Gali+Number+5,+near+D.K+Depot,+Block+B,+Laxmi+Vihar+Colony,+Najafgarh,+Delhi,+110043&ludocid=4945928519821815802&lsig=AB86z5VYd5mKIlv2oDLs7ucUUA24', '_blank';
}

let write_review = () => {
    window.location.href = 'https://www.google.com/search?hl=en-IN&gl=in&q=Chahal+Coaching+Center-C3,+RZ+71,+Gali+Number+5,+near+D.K+Depot,+Block+B,+Laxmi+Vihar+Colony,+Najafgarh,+Delhi,+110043&ludocid=4945928519821815802&lsig=AB86z5VYd5mKIlv2oDLs7ucUUA24', '_blank';
}

// form_fill 
let form_filled_scc = 0;
let form_div = document.getElementById('form_filler_div');
let autoFillerAlertTimer;

let form_filler = () => {
    let name = document.getElementById('name_form_send').value;
    let classstud = document.getElementById('class_form_send').value;
    let phoneno = document.getElementById('phoneno_form_send').value;
    let address = document.getElementById('address_form_send').value;
    let comment = document.getElementById('comment_form_send').value;

    window.location.href = `mailto:recipient@example.com?subject=I%20Want%20to%20Join%20Classes&body=Hi%20my%20name%20is%20${name},%0D%0AClass%20:%20${classstud}%0D%0AContact%20Number%20:%20${phoneno}%0D%0APermanent%20Address%20:%20${address}%0D%0AComment%20:%20${comment}`;
    document.getElementById('form_heading_title').innerHTML="We'll reach you soon..."
    form_div.innerHTML= ""
    let aa = document.createElement('div');
    aa.innerHTML = `<h1>Welcome, ${name}</h1>`;
    form_div.append(aa);
    document.getElementById('form_detail_btn').disabled = true;
    form_filled_scc++;
    clearTimeout(autoFillerAlertTimer);
    document.getElementById('auto_filler_hover').classList.add('hide_class');

    let a = document.getElementById('auto_filler_hover')
            a.classList.add('hide_class');
            a.innerHTML = ""
}
let form_filler_wa = () => {
    let name = document.getElementById('name_form_send').value;
    let classstud = document.getElementById('class_form_send').value;
    let phoneno = document.getElementById('phoneno_form_send').value;
    let address = document.getElementById('address_form_send').value;
    let comment = document.getElementById('comment_form_send').value;

    window.location.href = `https://wa.me/+918700572539?text=I%20Want%20to%20Join%20Classes.%0D%0AHi%20my%20name%20is%20${name}%0D%0AClass%20:%20${classstud}%0D%0AContact%20Number%20:%20${phoneno}%0D%0APermanent%20Address%20:%20${address}%0D%0AComment%20:%20${comment}`;
    document.getElementById('form_heading_title').innerHTML="We'll reach you soon..."
    form_div.innerHTML= ""
    let aa = document.createElement('div');
    aa.innerHTML = `<h1>Welcome, ${name}</h1>`;
    form_div.append(aa);
    document.getElementById('form_detail_btn').disabled = true;
    form_filled_scc++;
    clearTimeout(autoFillerAlertTimer);
    document.getElementById('auto_filler_hover').classList.add('hide_class');

    let a = document.getElementById('auto_filler_hover')
            a.classList.add('hide_class');
            a.innerHTML = ""
}

let close_hover_form = ()=>{
    let a = document.getElementById('auto_filler_hover')
            a.classList.add('hide_class');
            a.innerHTML = ""
}

let auto_form_filler_alert = () => {
    if (form_filled_scc !== 1) {
        autoFillerAlertTimer = setTimeout(() => {
            let a = document.getElementById('auto_filler_hover')
            a.classList.remove('hide_class');
            a.innerHTML = `<h3 style="text-align: center;font-weight: 700;background-color: #5e9e16;padding: 20px;border-radius: 0px;color: #dde1e7;font-size: 20px;margin: 0px;">STUDENT REGISTRAION FORM</h3>
            <div class="form_fill" style="background-color: #bfdfbb;padding: 10px;margin: 0px;">
                <form id="form_filler_div">
                    <label for="name" class="form-label">Name</label>
                    <input type="name" id="name_form_send" class="form-control">
                    <label for="class" class="form-label">Class</label>
                    <select class="form-select" aria-label="Default select example" id="class_form_send">
                        
                        <option value="Null" style="color: gray;">Select Class</option>
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                        <option value="5th">5th</option>
                        <option value="6th">6th</option>
                        <option value="7th">7th</option>
                        <option value="8th">8th</option>
                        <option value="9th">9th</option>
                        <option value="10th">10th</option>
                        <option value="11th">11th</option>
                        <option value="12th">12th</option>
                    </select>
                    <label for="tel" class="form-label">Phone Number</label>
                    <input type="tel" id="phoneno_form_send" class="form-control">
                    <label for="address" class="form-label">Permanent Address</label>
                    <input type="address" id="address_form_send" class="form-control">
                    <label for="comment" class="form-label">Comment</label>
                    <textarea type="comment" id="comment_form_send" placeholder="Enter your comment........."
                        class="form-control"></textarea>
                        <button type="button" class="btn btn-primary m-3" id="form_detail_btn" onclick="form_filler()">Submit by
                            Email</button>
                        <button type="button" class="btn btn-success m-3" id="form_detail_btn" onclick="form_filler_wa()">Submit by
                            WhatsApp</button>
                </form>
            </div>
            <button type="button" class="btn-close position-absolute top-0 end-0 m-4" aria-label="Close" onclick="close_hover_form()"></button>` 

        }, 10000);
    }
}
auto_form_filler_alert();