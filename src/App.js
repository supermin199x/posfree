import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Card } from '@mui/material';



const theme = createTheme();

export default function App() {

	const [item, setItem] = useState(0);
	const [price, setPrice] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const handleClearForm = () => {
		setItem(0);
		setPrice(0);
		setTotalPrice(0);
	};

	const setPriceTotal = (e) => {
		setTotalPrice(e.target.value);
	};

	const setPriceOne = () => {
		setPrice(100);
	};

	const setPriceTwo = () => {
		setPrice(500);
	};

	const setPriceThree = () => {
		setPrice(1000);
	};

  return (
    <ThemeProvider theme={theme}>
		<CssBaseline />
		<form action="">
			<Container component="main" maxWidth="sm" sx={{ width:'100vw', height:'90vh', display: 'flex', flexDirection: 'row', justifyContent:'center', marginTop:5 }}>
				<Paper variant="outlined" sx={{ display: 'flex', flexDirection: 'column', rowGap:1, columnGap:3, padding:3 }}>
					<Box
						sx={{
							width: 800,
							maxWidth: '100%',
						}}
					>
						<TextField onChange={setPriceTotal} sx={{fontSize:'36px'}} fullWidth label="Scan Me" id="fullWidth" autoFocus/>
					</Box>
					<Card
						sx={{
							width: 800,
							height: '50%',
							maxWidth: '100%',
							marginTop: 2
						}}
					>
						<ul>
							<li>{item}</li>
						</ul>
					</Card>
					<Box
						sx={{
							width: 800,
							maxWidth: '100%',
						}}
					>
						<FormControl fullWidth sx={{ mt: 2 }} variant="standard">
							<InputLabel htmlFor="standard-adornment-amount">เงินที่รับ</InputLabel>
							<Input
								id="standard-adornment-amount"
								startAdornment={<InputAdornment position="start">฿ {price}</InputAdornment>}
							/>
						</FormControl>
						<Button onClick={setPriceOne} variant="contained" size="large" sx={{marginTop: 2, marginRight: 1}}>฿ 100</Button>
						<Button onClick={setPriceTwo} variant="contained" size="large" sx={{marginTop: 2, marginRight: 1}}>฿ 500</Button>
						<Button onClick={setPriceThree} variant="contained" size="large" sx={{marginTop: 2}}>฿ 1,000</Button>
					</Box>
					<FormControl fullWidth sx={{ mt: 2 }} variant="filled">
						<InputLabel htmlFor="filled-adornment-amount">ราคาของทั้งหมด</InputLabel>
						<FilledInput
							id="filled-adornment-amount"
							startAdornment={<InputAdornment position="start">฿ {totalPrice}</InputAdornment>}
						/>
					</FormControl>
					<FormControl fullWidth sx={{ mt: 2 }} variant="filled">
						<InputLabel htmlFor="filled-adornment-amount">เงินทอน</InputLabel>
						<FilledInput
							id="filled-adornment-amount"
							startAdornment={<InputAdornment position="start">฿ {price - totalPrice}</InputAdornment>}
						/>
					</FormControl>
					<Button onClick={handleClearForm} type="reset" variant="contained" size="large" sx={{
							marginTop: 2
						}}>
						ขายใหม่
					</Button>
				</Paper>
			</Container>
		</form>
    </ThemeProvider>
  );
}