import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <image width="28" height="28" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADXElEQVRIibXW226UdRQF8N9Mp7WlKlSlnrUCoRClIlbjWVSMGr0x0XDlAxjfwQfwHYyJGiMxemHUGKIR41kUT9QDGoOgJVgPPQx1kJmOF3tP+tVO6UyiO2k6/b7/7LXX+q+9d0ueauoyzsBjuBEv4QXUO/1yuVs03IZrsBG3YGs3eboBLGEEu/AZHsdx3If1/wdgP+7C1fgbB/P3vdiGnk6SVLoAXI8bMIgrs9gRrMV1+AJT/xVgDzYIw7yD7wS7/ZjGFbi0E8BOJR3KpD9jj5ATPsZzaOCSThIVGa7DmSj2SQmzOF9I+icuw+XiLs/Fl6jhPAyLFllTyFPKz7OYq2CTsPkm9GKhANiHrzGfxdXxACbxC7Yn+2aeHcfFybaeuUr5rorPK3gIO/B7StYoVLZg0X3NfHciGVUyyXwqQ1xROc81CsVXsBkbKsJhc3gSByyPBYziWmGUV7PA7XgLH2F3qrM/35cK32/m37djdyUfzKXGRTmLMSDu7hi+F6Z5Iz+flRI2Uo2mpT5ogc5gtiy0bmaF7eJs7BQ9OJxnj4tpUxVyXoA788xKA6AXzZZLS5bK0Ip+3CPm5svCfSM4mu8HMYavMuEOcad7LVerhPJqfTgutsIkPhGy7kqQ4QS4PwvbJ9S6O4tqm3u1STMuJswpMS8bCVbHT9gi7m8aF+KiLGQLjrRhueqkOSEaequQ8WkhzbhYTdcL9s+KVhlNtguWG6cjhgfwV4IdzIS9yXQ+wQcwgXfz3Frh3raOXw1wAt8mU8nmRTHSamJQTOE3YfvXhbFOrsRwNUlrBTA4jPcFszHRFnsTjGBVFXfeNrpZwK2NsVMYoyYMdZNYTYOdJOlkHw4J142KxTuG58VefBCP4iocEnf3jaWqdAQ4ICbMEO4Qq6ghNsFhsd1/wAdiumwUK+tmfJjPpy0O+raALVdtFitoREhXxnt4U1i+jh/z7ASeEI7tFUPgYTEcZoSzXxOrrNkCbCbYSSHdIzhHLNZP8YeYMsfaKDEttkUrqsLVfaJ/bxWL/ZksdKHFsCbsPJay7cHbWfnp4t/WP5Q/xFCfsnglk2hUxD9GfULKEXHx+0TDrymo0G008EqS2CYY9ldE81YzeU1o3yN6bV0+X2lPni5OJcivWfAQZv4BQKPh35Jiok0AAAAASUVORK5CYII=" />
    </Svg>
  );
};

export default Icon;
