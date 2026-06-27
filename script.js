document.addEventListener("DOMContentLoaded", () => {

    // Smooth reveal
    const reveals = document.querySelectorAll(
        "section,.project-card,.skill-group,.research-card,.cert-card"
    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    reveals.forEach(el=>observer.observe(el));



    // =============================
    // Active Navigation
    // =============================

    const sections=document.querySelectorAll("section");
    const navLinks=document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-150;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });




    // ==========================
    // Scroll Progress Bar
    // ==========================

    const progress=document.createElement("div");

    progress.className="progress-bar";

    document.body.appendChild(progress);

    window.addEventListener("scroll",()=>{

        const scrollTop=document.documentElement.scrollTop;

        const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

        const width=(scrollTop/height)*100;

        progress.style.width=width+"%";

    });



    // ===========================
    // Back To Top
    // ===========================

    const topBtn=document.createElement("button");

    topBtn.innerHTML="↑";

    topBtn.className="top-btn";

    document.body.appendChild(topBtn);

    topBtn.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

    window.addEventListener("scroll",()=>{

        topBtn.classList.toggle("show-top",window.scrollY>500);

    });



    



});