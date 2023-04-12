import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
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

	const [items, setItems] = useState([]);
	const [price, setPrice] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const enterAddItem = (e) => {
		if(e.keyCode === 13){
		   pushItem(e);
		   e.target.value = "";
		}
	}

	const pushItem = (e) => {
		const newItem = e.target.value;
		const numbers = newItem.match(/\d+/g).map(Number); // extract numbers from the string and convert to numbers
		const sum = numbers.reduce((acc, curr) => acc + curr, 0); // add up the numbers
		setTotalPrice(totalPrice => totalPrice + sum); // add sum to the total price
		setItems(items => [...items, newItem]); // add the original item to the items array
	  
	}
	
	const setPriceKey = (e) => {
		setPrice(e.target.value);
	};

	const setPriceItem = (price) => {
		setPrice(price);
	};

	const handleClearForm = () => {
		setItems([]);
		setPrice(0);
		setTotalPrice(0);
	};

  return (
    <ThemeProvider theme={theme}>
		<CssBaseline />
		<Container component="main"  sx={{ width:'100vw', height:'90vh', display: 'flex', flexDirection: 'row', justifyContent:'center',columnGap:2, marginTop:5 }}>
			<Paper variant="outlined" sx={{ widht:'70%', display: 'flex', flexDirection: 'column', rowGap:1, columnGap:3, padding:3 }}>
				<Box
					sx={{
						width: '100%',
						maxWidth: '100%',
					}}
				>
					<TextField onKeyDown={enterAddItem} sx={{fontSize:'36px'}} fullWidth label="Scan Me" id="fullWidth" autoFocus/>
				</Box>
				<Card
					sx={{
						width: 800,
						height: '50%',
						display:'flex',
						flexDirection:'column',
						flexWrap: 'wrap',
						rowGap:0,
						maxWidth: '100%',
						marginTop: 2,
						padding:2
					}}
				>
					{items.map((item, key)=>(
						<Card sx={{width: '250px', padding:1, fontSize: '16px', fontWeight: '700', marginBottom: 2}}>{"รายการที่" + (key+1)}.{"ราคา" + item + "บาท"}</Card>
					))}
				</Card>
				<Box
					sx={{
						width: 800,
						maxWidth: '100%',
					}}
				>
					<Box
						sx={{
							width: 800,
							maxWidth: '100%',
							display: 'flex'
						}}
					>
						<FormControl fullWidth sx={{ mt: 2, mr: 2 }} variant="standard">
							<InputLabel htmlFor="standard-adornment-amount">เงินที่รับ</InputLabel>
							<Input
								id="standard-adornment-amount"
								startAdornment={<InputAdornment position="start" >{price}</InputAdornment>}
							/>
						</FormControl>
						<FormControl fullWidth sx={{ mt: 2 }} variant="standard">
							<InputLabel htmlFor="standard-adornment-amount">ป้อนเอง</InputLabel>
							<Input onChange={setPriceKey}
								id="standard-adornment-amount"
								startAdornment={<InputAdornment position="start" value={price}></InputAdornment>}
							/>
						</FormControl>
					</Box>
					<Button onClick={()=>{setPriceItem(100)}} variant="contained" size="large" sx={{marginTop: 2, marginRight: 1}}>฿ 100</Button>
					<Button onClick={()=>{setPriceItem(200)}} variant="contained" size="large" sx={{marginTop: 2, marginRight: 1}}>฿ 200</Button>
					<Button onClick={()=>{setPriceItem(300)}} variant="contained" size="large" sx={{marginTop: 2, marginRight: 1}}>฿ 300</Button>
					<Button onClick={()=>{setPriceItem(400)}} variant="contained" size="large" sx={{marginTop: 2, marginRight: 1}}>฿ 400</Button>
					<Button onClick={()=>{setPriceItem(500)}} variant="contained" size="large" sx={{marginTop: 2, marginRight: 1}}>฿ 500</Button>
					<Button onClick={()=>{setPriceItem(1000)}} variant="contained" size="large" sx={{marginTop: 2, marginRight: 1}}>฿ 1,000</Button>
					<Button onClick={()=>{setPriceItem(1500)}} variant="contained" size="large" sx={{marginTop: 2, marginRight: 1}}>฿ 1,500</Button>
					<Button onClick={()=>{setPriceItem(0)}} variant="contained" size="large" sx={{marginTop: 2}}>FREE</Button>
				</Box>
				<FormControl fullWidth sx={{ mt: 2 }} variant="filled">
					<InputLabel htmlFor="filled-adornment-amount">ราคาของทั้งหมด</InputLabel>
					<FilledInput
						id="filled-adornment-amount"
						startAdornment={<InputAdornment position="start">฿ {totalPrice}</InputAdornment>}
					/>
				</FormControl>
				<Button onClick={handleClearForm} type="reset" variant="contained" size="large" sx={{
						marginTop: 2
					}}>
					ขายใหม่
				</Button>
			</Paper>
			<Paper sx={{ width:'30%', height: 'fit-content', textAlign:'center', padding:2}}>
				<InputLabel htmlFor="filled-adornment-amount" sx={{fontSize:'24px'}}><h1>เงินทอน</h1></InputLabel>
				<FilledInput
					id="filled-adornment-amount"
					startAdornment={<InputAdornment position="start">฿ {price - totalPrice}</InputAdornment>}
					readOnly
					disabled
					sx={{fontSize:'36px', fontWeight:'700'}}
				/>
				<Button variant="contained" size="large" sx={{marginTop: 2, marginRight: 1}}>พิมพ์ใบเสร็จ</Button>
			</Paper>
		</Container>
    </ThemeProvider>
  );
}