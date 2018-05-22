import React, { Component } from 'react'

class Header extends Component{

    render(){
        return(
            <nav className="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2">
				<h1 className="site-title"><a href="index.html"><em className="fa fa-rocket"></em> Brand.name</a></h1>
													
				<a href="#menu-toggle" className="btn btn-default" id="menu-toggle"><em className="fa fa-bars"></em></a>
				<ul className="nav nav-pills flex-column sidebar-nav">
					<li className="nav-item"><a className="nav-link active" href="/"><em className="fa fa-dashboard"></em> Dashboard <span className="sr-only">(current)</span></a></li>
					<li className="nav-item"><a className="nav-link" href="usuarios"><em className="fa fa-calendar-o"></em> Usuários</a></li>
					<li className="nav-item"><a className="nav-link" href="produtos"><em className="fa fa-bar-chart"></em> Produtos</a></li>
				</ul>
				<a href="login.html" className="logout-button"><em className="fa fa-power-off"></em> Sair</a>
			</nav>
        )
    }

}

export default Header