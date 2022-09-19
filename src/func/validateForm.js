export const validate = (input) => {
    const errors = {
        name: "",
        image: "",
    }

    let regExp = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)($|\?.*$)/;
    let url = input.image.match(regExp);

    if (!input.image) {
        errors.image = "copy an image URL ";
      } else if (!url?.length) {
        errors.image = "copy a valid URL! ";
      }

    if(!input.name){
        errors.name= "enter a name"
    }

    return errors;
}