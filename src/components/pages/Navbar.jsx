import React, { useState, useEffect } from 'react';
import {
	Wrapper,
	NavList,
	NavItems,
	Logo,
	Time,
	Menu,
} from '../../css/NavbarWrapper';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Grid } from '@mui/material';
import logo from '../../assets/Screenshot_20220602-180208_1.png';
import { Link, useLocation, Outlet } from 'react-router-dom';
import PianoIcon from '@mui/icons-material/Piano';
const mystyle = {
	fontSize: ' 1rem !important',
	fontFamily: 'sans-serif !important',
	color: 'purple !important',
	textDcoration: 'none !important',
};
export default function Navbar() {
	const [isopen, setisopen] = useState(false);
	const [date, setDate] = useState(new Date().toLocaleTimeString());

	const mywatch = () => {
		const date = new Date().toLocaleTimeString();
		setDate(date);
	};
	useEffect(() => {
		setInterval(() => {
			mywatch();
		}, 1000);
		return () => {
			clearInterval(mywatch);
		};
	});
	return (
		<Grid>
			<Wrapper className="container-fluid">
				<Logo>
					<img src={logo} alt="" />
					<h4>
						Zac
						<PianoIcon sx={{ color: 'maroon' }} />
						ey
						<span style={{ color: '#3bce !important' }}>
							developer
						</span>
					</h4>
				</Logo>
				<Menu>
					<IconButton onClick={() => setisopen(!isopen)}>
						{' '}
						{isopen ? (
							<CloseIcon sx={{ color: 'white' }} />
						) : (
							<MenuIcon sx={{ color: 'white' }} />
						)}
					</IconButton>
				</Menu>

				<NavList isopen={isopen}>
					<Link style={{ textDecoration: 'none' }} to="/">
						<NavItems>Home</NavItems>
					</Link>
					<Link style={{ textDecoration: 'none' }} to="pages/about">
						<NavItems>About</NavItems>
					</Link>
					<Link style={{ textDecoration: 'none' }} to="pages/contact">
						<NavItems>Contact</NavItems>
					</Link>
					<Link style={{ textDecoration: 'none' }} to="pages/faq">
						<NavItems>Faq</NavItems>
					</Link>
					<Time
						style={{
							color: 'white',
							fontFamily: 'serif',
							fontWeight: 'bold',
						}}
					>
						{date}
					</Time>
				</NavList>
				<Outlet />
			</Wrapper>
		</Grid>
	);
}
