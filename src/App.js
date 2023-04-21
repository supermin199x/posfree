import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Card } from '@mui/material';
import Barcode from 'react-barcode';
import NewWindow from 'react-new-window'


const theme = createTheme();

export default function App() {

	const [code, setCode] = useState([]);
	const [shelf, setShelf] = useState('A');
	const [floor, setFloor] = useState('1');
	const [box, setBox] = useState('A');
	const [boxNo, setBoxNo] = useState('ทั้งหมด');
	const [quatity, setQuatity] = useState('1');

	/*const enterAddItem = (e) => {
		if(e.keyCode === 13){
		   pushItem(e);
		   e.target.value = "";
		}
	}*/

	const pushItem = (e) => {
		if(boxNo === 'ทั้งหมด' ){
			for(var i=1;i<=quatity;i++) {
				const newItem = 'S' + shelf + floor + box + i;
				setCode(code => [...code, newItem]);
			}
		}else {
			const newItem = 'S' + shelf + floor + box + boxNo;
			setCode(code => [...code, newItem]);
		}
	}
	const handleClearForm = () => {
		setCode([]);
		setShelf('A');
		setFloor('1');
		setBox('A');
		setBoxNo('ทั้งหมด');
		setQuatity('1');
	}
	const handlesetShelf = (e) => {
		setShelf(e.target.value);
	}
	const handlesetFloor = (e) => {
		setFloor(e.target.value);
	}
	const handlesetBox = (e) => {
		setBox(e.target.value);
	}
	const handlesetBoxNo = (e) => {
		setBoxNo(e.target.value);
	}
	const handlesetQuatity = (e) => {
		setQuatity(e.target.value);
	}

	let newWindow;
	var top = window.screen.height - 700;
    top = top > 0 ? top/2 : 0;
            
	var left = window.screen.width - 920;
    left = left > 0 ? left/2 : 0;

	const openNewWindow = () => {
		const params = `scrollbars=1,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=920,height=700,top=${top},left=${left}`;
		newWindow = window.open('พิมพ์บาร์โค๊ด', '', params);
		newWindow.moveTo(left, top);
		newWindow.focus();	

		newWindow.document.write(document.getElementById('barcode').innerHTML);
		newWindow.document.write("<button style='position:absolute;bottom:10px;left:0px;right:0px;margin-left:auto;margin-right:auto;width:80px;height:30px;cursor:pointer;font-size:16px;' onclick='window.print();window.close();'>Print</button>");
	};

  return (
    <ThemeProvider theme={theme}>
		<CssBaseline />
		<Container component="main" sx={{ width:'100vw', height:'90vh', display: 'flex', flexDirection: 'column', justifyContent:'center',columnGap:2, marginTop:5}}>
			<h1></h1>
			<Paper variant="outlined" sx={{width:'100%',height:'100%', display: 'flex', flexDirection: 'column', rowGap:1, columnGap:3, padding:3}}>
				<Box sx={{width: '100%', maxWidth: '100%', display:'flex', columnGap:'5px'}}>
					<FormControl fullWidth>
						<TextField
							labelId="label-0"
							id="select-0"
							label="Sparepart"
							value={'S'}
							readonly disabled
						>
							S
						</TextField>
					</FormControl>
					<FormControl fullWidth>
						<InputLabel id="input-1">ตู้</InputLabel>
						<Select
							labelId="label-1"
							id="select-1"
							label="ตู้"
							value={shelf}
							onChange={handlesetShelf}
						>
							<MenuItem value={'A'}>A</MenuItem>
							<MenuItem value={'B'}>B</MenuItem>
							<MenuItem value={'C'}>C</MenuItem>
							<MenuItem value={'D'}>D</MenuItem>
							<MenuItem value={'E'}>E</MenuItem>
							<MenuItem value={'F'}>F</MenuItem>
							<MenuItem value={'G'}>G</MenuItem>
							<MenuItem value={'H'}>H</MenuItem>
							<MenuItem value={'I'}>I</MenuItem>
							<MenuItem value={'J'}>J</MenuItem>
							<MenuItem value={'K'}>K</MenuItem>
							<MenuItem value={'L'}>L</MenuItem>
							<MenuItem value={'M'}>M</MenuItem>
							<MenuItem value={'N'}>N</MenuItem>
							<MenuItem value={'O'}>O</MenuItem>
						</Select>
					</FormControl>
					<FormControl fullWidth>
						<InputLabel id="input-2">ชั้น</InputLabel>
						<Select
							labelId="label-2"
							id="select-2"
							label="ชั้น"
							value={floor}
							onChange={handlesetFloor}
						>
							<MenuItem value={'1'}>1</MenuItem>
							<MenuItem value={'2'}>2</MenuItem>
							<MenuItem value={'3'}>3</MenuItem>
							<MenuItem value={'4'}>4</MenuItem>
							<MenuItem value={'5'}>5</MenuItem>
							<MenuItem value={'6'}>6</MenuItem>
						</Select>
					</FormControl>
					<FormControl fullWidth>
						<InputLabel id="input-3">กล่อง</InputLabel>
						<Select
							labelId="label-3"
							id="select-3"
							label="กล่อง"
							value={box}
							onChange={handlesetBox}
						>
							<MenuItem value={'A'}>A</MenuItem>
							<MenuItem value={'B'}>B</MenuItem>
							<MenuItem value={'C'}>C</MenuItem>
							<MenuItem value={'D'}>D</MenuItem>
							<MenuItem value={'E'}>E</MenuItem>
							<MenuItem value={'F'}>F</MenuItem>
							<MenuItem value={'G'}>G</MenuItem>
							<MenuItem value={'H'}>H</MenuItem>
							<MenuItem value={'I'}>I</MenuItem>
							<MenuItem value={'J'}>J</MenuItem>
							<MenuItem value={'K'}>K</MenuItem>
							<MenuItem value={'L'}>L</MenuItem>
							<MenuItem value={'M'}>M</MenuItem>
							<MenuItem value={'N'}>N</MenuItem>
							<MenuItem value={'O'}>O</MenuItem>
							<MenuItem value={'P'}>P</MenuItem>
							<MenuItem value={'Q'}>Q</MenuItem>
							<MenuItem value={'R'}>R</MenuItem>
							<MenuItem value={'S'}>S</MenuItem>
							<MenuItem value={'T'}>T</MenuItem>
						</Select>
					</FormControl>
					<FormControl fullWidth>
						<InputLabel id="input-4">กล่องที่</InputLabel>
						<Select
							labelId="label-4"
							id="select-4"
							label="กล่องที่"
							value={boxNo}
							onChange={handlesetBoxNo}
						>
							<MenuItem value={'ทั้งหมด'}>ทั้งหมด</MenuItem>
							<MenuItem value={'1'}>1</MenuItem>
							<MenuItem value={'2'}>2</MenuItem>
							<MenuItem value={'3'}>3</MenuItem>
							<MenuItem value={'4'}>4</MenuItem>
							<MenuItem value={'5'}>5</MenuItem>
							<MenuItem value={'6'}>6</MenuItem>
						</Select>
					</FormControl>
					<FormControl fullWidth>
						<InputLabel id="input-5">จำนวน</InputLabel>
						<Select
							labelId="label-5"
							id="select-5"
							label="จำนวน"
							value={quatity}
							onChange={handlesetQuatity}
						>
							<MenuItem value={'1'}>1</MenuItem>
							<MenuItem value={'2'}>2</MenuItem>
							<MenuItem value={'3'}>3</MenuItem>
							<MenuItem value={'4'}>4</MenuItem>
							<MenuItem value={'5'}>5</MenuItem>
							<MenuItem value={'6'}>6</MenuItem>
						</Select>
					</FormControl>
					<Button onClick={pushItem} type="button" variant="contained" size="small" sx={{width:'300px'}}>
						สร้างบาร์
					</Button>
				</Box>
				<Card id="barcode" sx={{width: '100%', height: 'fit-content', maxHeight:'90%', display:'flex', flexDirection:'row', flexWrap: 'wrap', rowGap:'2%', columnGap:'2%', marginTop: 2, padding:2, overflowY:'scroll'}}>
					{code.map((item, key)=>(
						<Barcode width={1} height={20} sx={{fontSize: '16px', fontWeight: '700'}} value={item} />
					))}
				</Card>
				<Box sx={{display: 'flex', justifyContent: 'end'}}>
					<Button onClick={openNewWindow} type="button" variant="contained" size="large" color="success" sx={{marginTop: 2, marginRight: 2}}>
						พิมพ์บาร์โค๊ด
					</Button>
					<Button onClick={handleClearForm} type="reset" variant="contained" size="large" color="warning" sx={{marginTop: 2,}}>
						ล้างค่า
					</Button>
				</Box>
			</Paper>
		</Container>
    </ThemeProvider>
  );
}