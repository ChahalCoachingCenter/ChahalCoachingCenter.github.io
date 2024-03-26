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
  "https://www.instagram.com/p/CsfsOSCthXW/?utm_source=ig_embed&utm_campaign=loading",
];

permalinks.forEach((permalink) => {
  const embed = createInstagramEmbed(permalink);
  container.appendChild(embed);
});

let read_more_reviews = () => {
  window.open(
    "https://www.google.com/search?hl=en-IN&gl=in&q=Chahal+Coaching+Center-C3,+RZ+71,+Gali+Number+5,+near+D.K+Depot,+Block+B,+Laxmi+Vihar+Colony,+Najafgarh,+Delhi,+110043&ludocid=4945928519821815802&lsig=AB86z5VYd5mKIlv2oDLs7ucUUA24",
    "_blank"
  );
};

let write_review = () => {
  window.open(
    "https://search.google.com/local/writereview?placeid=ChIJ4wc514IPDTkR-u9zvMh3o0Q",
    "_blank"
  );
};

// form_fill
let form_filled_scc = 0;
let form_div = document.getElementById("form_filler_div");
let autoFillerAlertTimer;

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzUE7tWLKgiFz2iJQe_sQ3mbpHoS-hRWLhiNViZxorpHlHmiDsmJExWJ80TZjug42IrpA/exec";
const form = document.forms["student-details-c3"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

let close_hover_form = () => {
  let a = document.getElementById("auto_filler_hover");
  a.classList.add("hide_class");
  a.innerHTML = "";
};

let auto_form_filler_alert = () => {
  if (form_filled_scc !== 1) {
    autoFillerAlertTimer = setTimeout(() => {
      let a = document.getElementById("auto_filler_hover");
      a.classList.remove("hide_class");
      a.innerHTML = `<h3 id="form_heading_title" class="form_heading" style="border-top-left-radius:30px;border-top-right-radius:30px;">STUDENT REGISTRAION FORM</h3>
            <div class="form_fill" style="background-color: var(--light);padding: 10px;margin: 0px;border-bottom-left-radius:30px;border-bottom-right-radius:30px;" id="form_filler_div">
            <form name="student-details-c3">
        <div class="form-floating mb-3">
          <input
            type="name"
            id="name"
            class="form-control form_input_color"
            placeholder="name@example.com"
          />
          <label for="name">Name</label>
        </div>
        <select
          id="class"
          class="form-select form_input_color mb-3"
          aria-label="Default select example"
          id="class_form_send"
        >
          <option value="Null" style="color: gray">Select Class</option>
          <option value="1th to 8th">1th to 8th</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
          <option value="NDA">NDA</option>
          <option value="CUET">CUET</option>
        </select>
        <div class="form-floating mb-3">
            <input
              type="text"
              id="subject"
              class="form-control form_input_color"
              placeholder=""
            />
            <label for="subject">Subjects</label>
          </div>
        <div class="form-floating mb-3">
          <input
            type="tel"
            id="phone"
            class="form-control form_input_color"
            placeholder="name@example.com"
          />
          <label for="tel">Phone Number</label>
        </div>
        <div class="form-floating">
          <textarea
            type="comment"
            id="comment"
            placeholder="Enter your comment........."
            class="form-control form_input_color"
          ></textarea>
          <label for="comment">Comment</label>
        </div>

        <button type="submit" class="btn bg-white m-2">Submit</button>
      </form>
            </div>
            <button type="button" class="btn-close position-absolute top-0 end-0 m-4" aria-label="Close" onclick="close_hover_form()" style="color:var(--white);background-color:var(--white)"></button>`;
    }, 10000);
  }
};
