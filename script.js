const gallery = (function () {
    const GALLERY = document.querySelector(".gallery__container") // 'const GALLERY' vælger et HTML-element med klassen "gallery__container" ved hjælp af querySelector-metoden. Dette element er en DIV, men kunne for eksempel være et <nav>, <ul> eller et hvilket som helst andet gyldigt HTML-element, der har den angivne klasse.
    const FOCUSED_IMAGE = document.createElement("img") // 'const FOCUSED_IMAGE' opretter et nyt HTML img-element ved hjælp af createElement-metoden. Dette nye img-element vil blive brugt til at vise en forstørret version af et billede, når brugeren klikker på det i galleriet.
    FOCUSED_IMAGE.classList.add("gallery__focusedImage") // tilføjer CSS-klassen "gallery__focusedImage" til FOCUSED_IMAGE-elementet ved hjælp af classList.add-metoden. 

    const THUMBSNAILS = document.createElement("div") // Denne kode opretter et nyt HTML div-element ved hjælp af createElement-metoden og tildeler assigner det til 'const THUMBSNAILS'.
    THUMBSNAILS.classList.add("gallery__thumbnails") // tilføjer CSS-klassen "gallery__thumbnails" til THUMBSNAILS-elementet ved hjælp af classList.add-metoden. Denne klasse kan bruges til at anvende specifikke stilarter til miniaturebeholderelementet ved hjælp af CSS.


    function builtThumbnail (image) {                   // Denne kode definerer en funktion kaldet 'builtThumbnail', som tager et billedparameter. Formålet funktionen er at oprette en thumbnail-knap til galleriet.
        const BUTTON = document.createElement("button") // Inde i funktionen oprettes et nyt HTML-knap-element ved hjælp af document.createElement-metoden, og tildeles 'const BUTTON'.
        BUTTON.addEventListener("mouseover", changeFocus) // AddEventListener-metoden bruges til at tilføje en "mouseover"-lytter til BUTTON-elementet. Når brugeren holder markøren over denne knap, vil changeFocus-funktionen blive udført.
        BUTTON.innerHTML = `<img src="${image}" alt="galleri miniature" class="gallery__thumbnail">` // innerHTML bruges til at indstille indholdet af BUTTON-elementet. Indholdet inkluderer et img-element med src-attributten indstillet til billedparameteren og med en CSS-klasse "gallery__thumbnail". img-element vil vise miniaturebilledet.
        BUTTON.classList.add("gallery__button") // ClassList.add-metoden bruges til at tilføje CSS-klassen "gallery__button" til BUTTON-elementet.
        THUMBSNAILS.append(BUTTON) // append-metoden bruges til at tilføje BUTTON-elementet til THUMBSNAILS-beholderelementet. thumbnail-knappen tilføjes til thumbnail-beholderen, så den kan vises i galleriet.
    }

    function changeFocus (event) { // ChangeFocus-funktionen tager et event object som en parameter, der indeholder information om den hændelse, der udløste funktionskaldet (i dette tilfælde en klikhændelse på en miniatureknap). 
                                   // Funktionen indstiller src-attributten for FOCUSED_IMAGE-elementet til src-attributten for den miniatureknap, der blev klikket på, hvilket effektivt ændrer det viste billede til det, der svarer til den klikkede miniatureknap.
        
        if (event.target.className == "gallery__thumbnail") {FOCUSED_IMAGE.src = event.target.src}
                                   
    }
    


    function init (images = []){
        FOCUSED_IMAGE.src = images[0]
        images.forEach(builtThumbnail) // putter thumbnails ind i DIV'en
        GALLERY.append(FOCUSED_IMAGE, THUMBSNAILS)
    }

    return {
        init
    }

} )()