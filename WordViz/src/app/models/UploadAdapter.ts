export class UploadAdapter {
    private loader;
    constructor(loader: any) {
      this.loader = loader;
      //loader.file
      console.log(this.readThis(loader));
    }
  
    public upload(): Promise<any> {
      //"data:image/png;base64,"+ btoa(binaryString) 
      return this.readThis(this.loader.file);
    }
  
    readThis(file: File): Promise<any> {
      console.log(file)
      let imagePromise: Promise<any> = new Promise((resolve, reject) => {
        var myReader: FileReader = new FileReader();
        myReader.onloadend = (e) => {
          let image = myReader.result;
          console.log(image);
        
            // resolve({ default: image });
            console.log({ default: "data:image/png;base64," + image });
          return { default: "data:image/png;base64," + image };
        // return {default: "http://52.14.42.38:8085/WordViz/chapter/new" +image}
          
        }
        console.log(myReader.result);
        // myReader.readAsDataURL(file);
        
        
      });
      return imagePromise;
    }
  
  }