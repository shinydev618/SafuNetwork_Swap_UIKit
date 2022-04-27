import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <image width="28" height="28" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADY0lEQVRIia3Wa2/UVRAG8N8u/xaF2otYQrhYTAHvCPVWBCVRJCFevqIfwBe8NL7AElIStZYarFq1IMWCiC2W1pYC211fzGxcsNtuI5P80+7JmXlmnjPznFPySU1aGS/gBJ7HfSzjcdTwDc7iiv9aKX1PYT/uooLHcA/jGMKlcoNTDdvxNHpQxWImsh3P5Hoz24Y+PImVTLaU6/tzXYGtaMNuDKADP+ACbmaQN7EHg5jJ724G3JLJHMpYEziPJTyFV5KxQcwUeBu7MotncQ1f57eE3zPoB/gInRjGT4LuARxNZmYxgi+T0s1Z/Wv4GB1F8r43s53BKL7P/+E3jGVSg+m8kJR14R1xflPinMcxl75/42ImcRwHiyy3J2k4kxtuNpxNFZdxGn/gcNJcTfp3JdjppPNPD9o0PsU8eoos/VZWNZJBaw85zSeFFbTjYGZcyrVRfIXbq/guZyJlbCuSnpXMbDWHulWykm9F53WKxqk32FwTPxn/qmyaUqIX+XctW8akaIZpMWOTgvL1rIZqI2D9W89mREU/i3OcF/PaCuBKkT8qmf1yC44rgr61KFzNKmgvsCkXNgspur/BQK1ar+zSLnTjiKDmR9zAnUcEVFeid9FdCGUphNLUpe78IwTsxfs4iYVCDOzOzGKP0L5pMfyV/wnWhn1CizdhosA5UdWBzKQP7+Xmy0IfN1rtFuxAP46Jm+ICPi8y4Kzouq0JekgM94gQ8ckNgJXFzXM843Sn/1mMFQ0b54W8PYG3RMUdQoCntN69HXguK+sS2nxRKNKdRsCSuIqGBYUfCkqOCFn6VVxXzYDbxSXwUoLtxnf4LP1nUWoErImxWBIC0N2Q7UkhzhNC3FezXryRYPtE0w2LI1mpbypWcazl5jEh0AN4VTTRYhPANtHlR8V43RA0jjeCNQOs2xUxFnPiTF9OwNu4LmgvCxb6RevvFNQP4Zfc94A1A6ziL9FIs/n7lKBrRQjDlJDDFzOhvVn9mQRcfri69SqsZYXXxB24A6+LZ0ZFDHKnGKMDyciooLHp7bEWYN3KCfqFoPGwaKS6DPYLNoZEU91aK1grgNUMspBfScjfMcHCPdHB5/z7elgz+1asKp4TVwV1baLKvgS5JKqsaP5EQWsVNlotA18Xj9xF8Yxs+TL+B9RgAV/H41e9AAAAAElFTkSuQmCC" />
    </Svg>
  );
};

export default Icon;
