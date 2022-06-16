const {Sauce} = require('./index');
const {sequelize} = require('../db');

describe('Sauce Model', () => {
	beforeAll(async () => {
		await sequelize.sync({force: true})
	});

	test('can create a Sauce', async() => {
		const testSauce = await Sauce.create({name : 'Cholula'})
		expect(testSauce.name).toBe('Cholula')
	})

	// test('Sauce has an image', async()=>{
	// 	const imageStr = 'https://media.giphy.com/m'
	// 	const testSauce =await Sauce.create({name:"Cholula",imgage: imageStr})
	// })


})