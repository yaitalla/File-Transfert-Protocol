import React from 'react';
import { flexContainer, item, btnCopy, btnNext, flexUl, flexBody, flexHeader, bolder, oneBTNstyle } from './style';
import ButtonDiv from './buttons';

const Misc = () =>
<div style={flexContainer}>
    <h2 style={flexHeader}>Your seedphrase<br/> has been created!</h2>
    <h5>(Les bouttons bleus sont des lien vers d autres maquettes)</h5>
    <ButtonDiv/>
  <div>
      <ul style={flexUl}>
        <li style={item}>
          <div style={flexBody}>
            <h4 style={bolder}> Make sure to copy it in<br/> a separate place for later use.</h4>
            <span>What is a seedphrase? <br/></span>
            <span>
              A seedphrase is a sery of 12 words that enables you to<br/> back up your
                    wallet on ohter devices. It is a private<br/> phrase and shall never be shared
            </span>
          </div>
        </li>
        <br/>

        <li style={item}>
          <button style={btnCopy}>Copy your seed</button>
        </li>
        <li style={item}>
          <button style={btnNext}>Next</button>
        </li>
      </ul>
  </div>
</div>

export default Misc;
