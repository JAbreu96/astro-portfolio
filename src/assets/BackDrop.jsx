import { atom, onMount } from "nanostores";
import { useStore } from '@nanostores/react';
import react from "@astrojs/react";
import Rain from "../utility/rain.jsx";

const $backdrop = atom(<div></div>);

function BackDrop() {
  const backdrop = useStore($backdrop);
  // document.getElementByID("main");
  // useEffect(() => {
  //   for (let i = 0; i < 10; i++) {
  //     new Rain({ target: 'main', row: 10 });
  //   }

  // }, [])

  console.log(backdrop);
  onMount($backdrop, () => {
    new Rain({ target: backdrop, row: 10 });
  })


  return
  <>
    <backdrop />
  </>

};

export default BackDrop;