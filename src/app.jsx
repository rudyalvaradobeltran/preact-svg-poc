import { Logo } from "./logo";
import { SvgLoader, SvgProxy } from "react-svgmt";
import Mastercards from "./images/mastercards.svg";

export function App() {
  const nombreSocio = 'Homero Simpson'

  return (
    <>
      <Logo />
      <SvgLoader path={Mastercards}>
        <SvgProxy selector=".nombreSocio">{nombreSocio}</SvgProxy>
      </SvgLoader>
    </>
  );
}
