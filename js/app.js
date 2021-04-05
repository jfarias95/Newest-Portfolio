new fullpage("#fullpage",{
    autoScrolling: true,
    navigation: true,
    responsiveSlides: true,
    onLeave:(origin,destination,direction) => {
        const section = destination.item;
        const title = section.querySelector("h2");
        const subTitle = section.querySelectorAll("h3");
        const icons = section.querySelectorAll(".icon");
        const image = section.querySelector(".project-img");
        const description = section.querySelector("p");
        const button = section.querySelector(".btn-primary")
        const timeLine = new TimelineMax ({delay:0.5});        
        if(destination.index === 1 || destination.index === 2){
            timeLine.fromTo(title,0.5,{y:'50', opacity:0},{y:0, opacity:1});
            timeLine.fromTo(subTitle,0.5,{y:'50', opacity:0},{y:0, opacity:1});
            timeLine.fromTo(description,0.5,{y:'50', opacity:0},{y:0, opacity:1});
            timeLine.fromTo(image,0.5,{y:'50', opacity:0},{y:0, opacity:1});
            timeLine.fromTo(button,0.5,{y:'50', opacity:0},{y:0, opacity:1});
        }else if(destination.index === 3){
            timeLine.fromTo(title,0.5,{y:'50', opacity:0},{y:0, opacity:1});
            timeLine.fromTo(description,0.5,{y:'50', opacity:0},{y:0, opacity:1});
            timeLine.fromTo(subTitle,0.5,{y:'50', opacity:0},{y:0, opacity:1});
            timeLine.fromTo(icons,0.5,{opacity:0},{opacity:1});
        }else if(destination.index === 4){
            timeLine.fromTo(title,0.5,{y:'50', opacity:0},{y:0, opacity:1});
            timeLine.fromTo(subTitle,0.5,{y:'50', opacity:0},{y:0, opacity:1});
            timeLine.fromTo(button,0.5,{y:'50', opacity:0},{y:0, opacity:1});
        }
    }
});

gsap.fromTo(".section-one", {opacity: 0.8}, {opacity: 1, duration: 1});
gsap.fromTo(".layer", {opacity: 0.8}, {opacity: 1, duration: 1});

