@
import 'dax';
.sympany {@
  include dax - font;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {@
    include dax - font;
  }
  .slides > section,
    .slides > section > section {
      height: 100 % ;
    }
    .slides.fit {
      display: flex!important;
      flex - direction: column;
      .imagerow {
        position: relative;
        figure {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
        img {
          width: auto;
        }
      }
    }
    .imagerow {
      height: 100 % ;
      display: flex;
      justify - content: center;
      align - items: center; & .vertical {
        flex - direction: column;
        align - items: flex - start;
      }
      figure {
        max - height: 100 % ; & : first - child: nth - last - child(2), & : first - child: nth - last - child(2) ~figure {
          width: 50 % ;
        } & : first - child: nth - last - child(3), & : first - child: nth - last - child(3) ~figure {
          width: 33 % ;
        }
      }
      img {
        width: 100 % ;
      } & .baseline - caption figure {
        height: 100 % ;
        display: flex;
        flex - direction: column;
        justify - content: flex - end; & : before,
        & : after {
          content: '';
          flex: 1;
        }
        figcaption {
          order: 4;
        }
      }
    }
    .no - border {
      border: none;
    }
    .no - shadow {
      box - shadow: none;
    }
    .border - radius {
      border - radius: 10 px;
    }
    .dark - bg {
      color: white;
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: white;
      }
    }
    /*
  
     

    .slides > section {
      height: 100%;
    }
    .no-border {
      border: none;
    }
    .slides > section.top-aligned,
    .slides > section > section.top-aligned,
    .top-aligned {
      padding-top: 0;
      img {
        margin-top: 0;
      }
    }
    .imagewrapper img {
      width: 100%;
      //Safari hack for keeping aspect ratio
      max-height: 10000px;
    }
    .imagerow {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .center {
      justify-content: center;
      text-align: center;
    }
    .roundedcorners {
      border-radius: 10px;
    }
    .fullscreen {
      width: 100%;
      height: 100%;
      img, figure {
        width: 100%;
        height: auto;
      }
    }
    .halfwidth {
      width: 50%;
    }
    .fit {
      display: flex !important;
      flex-direction: column;
      .imagerow {
        display: flex;
        overflow: hidden;
        .imagecell {
          display: flex;
          img {
            max-width: none;
            max-height: none;
            width: calc(100% - 30px);
            margin: 15px;
          }
        }
      }
    }
    .slides > section.fit {
      max-height: 100%;
    }
    .vertical-center {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      .centered {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    */
}