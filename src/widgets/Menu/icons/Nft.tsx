import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <image width="28" height="28" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADRUlEQVRIibXWS2tdVRQH8N+596RJ+iA10bbG2trGllhRnNiiaKuiUjIqOtSh+Dn6MZxFUBQEQUHUkYqIEx8d+KBFRSqKoNZo22jS3pvrYP8P9/TSBqTJgs3Z7PVe57/W3pXFwYt4HPNYxaV8u26e1lBjZ9a5GsfxMC7iQyzh6gY57MfhNJ7A/hpHsQ+v4aU47GAQhSrOqxgZJPK1yHXW4VU524EtOFa3MpnCMVzGOHrJtBPhTsvo1aw6PC1eL6vO6sfH7ejW+DeH83gOK5gYib4XmUGMtKNvMhrEcMPvJ6hegrkfVxrFKkJXFMCspu5HE0idzC/GwCwewl3RWc4aYC8exB0J/p/Yg6rOZgWf4VUFpZN4LIZ/xBv4Ls5uw0JK9BVeTiAifxIn8DleTyDdVO9w2+FZvJtSSFmfxPf4IA5hG/bgEXyDd1JSmMEuHMSZ2GtoHre0gcAQbe2zUapG5EZ5N6IBQ/g3+wZxDcIa42MtxTHDNumM8No6XdciuNt20jWENKWsPUMU9lqKfUPErsfrj/DWGodd5X9NGvZkZdhjE9fJYkLp1a3Ra2gLtue8di2NY7KjwHYCcwoC4VYcVpB4KPumPPtwnwKcI9k3gc4p7TKHA5GpWrL7u06dfkBB1taUYKuCwKcj2GTYUXrrJB7N+ZbIj8XBgtIS2wwH94zSYgvoVhYHx/FUHOzEr1EYV1plOpkuJaBpZQicw50J4rcEtF3p4z9yvg2/J/ABPu46dfo8flDG0EyivoBP8VacdqLcVQbB+1m/RH4ypfsWb+OjOJ6K7l94D29WFgfN4ZQyqnZF4GwMdvNPDiXrn8L7OxndnXJ2EvhZZZDM4p5UZAnn8WdlcfBCan0GX+d/XFHA1KYdcb6cajTUlLJKqfst3kTWqgK8AzWeTSlfwZcxeD26dIPzNcNZOkorWXAvTtRKSWaVnzw2Ev1G0m7sbe689tos6qDTUS7gZcM7a7PoKlbat3oz/zaL+uKsmaOVgs7NooG8aVbj8KDSNxcisN7d9n+ciP157K6VZ8K08sh5Hj9HaCPepT2linuUGTteK+PrsvJgekbpt+Z5eLPUPIRnlAS+qJXHDqUHj7j2+bdRtKzM4E/+A1C91a/CwSafAAAAAElFTkSuQmCC" />
    </Svg>
  );
};

export default Icon;
