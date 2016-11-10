import React, {Component} from 'react'
import {Link} from 'react-router'

const Fjarfestir = (props) => (
  <div>
    <br/>
    <Link to="fjarfestir">fjarfestir</Link>
    <Link to="umokkur">Um Okkur</Link>
    {props.children}
  </div>
)

export default Fjarfestir
