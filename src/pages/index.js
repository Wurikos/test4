import React from "react";
import theme from "theme";
import { Theme, Box, Image, Text, Link, Span, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { MdRowing } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="Section__main" display="block" position="relative">
			<Box
				background="rgba(0,0,0,.4);"
				position="absolute"
				width="100%"
				height="100%"
				bottom="auto"
				left="0px"
				right="auto"
				top="0px"
				opacity="1"
				z-index="1"
			/>
			<Image
				width="100%"
				height="100%"
				src="http://ipic.su/img/img7/fs/full_5oWIwcL3.1597480516.jpg"
				position="absolute"
				top="auto"
				right="0px"
				bottom="0px"
				left="auto"
				object-fit="cover"
			/>
			<Stack
				quarkly-title="Stack__header"
				height="100px"
				display="flex"
				width="100%"
				margin="0px 0px"
				position="relative"
				z-index="3"
			>
				{"    "}
				<StackItem width="50%" display="flex" quarkly-title="header__name">
					<Override slot="StackItemContent" font="38px --fontFamily-googleMontserrat" />
					{"        "}
					<Text
						font="normal 300 38px/1.5 --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						display="inline-block"
						quarkly-title="Text"
						color="#fff"
						width="100%"
					>
						{" "}Sushi
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					quarkly-title="header__contacts"
					sm-display="none"
					md-display="none"
				>
					<Override slot="StackItemContent" justify-content="flex-end" />
					<Link
						href="tell: +1(234) 567 89 99  "
						font="normal 400 28px/1.5 --fontFamily-googleMontserrat"
						text-decoration-line="initial"
						color="#fff"
						align-self="flex-start"
					>
						{" "}+1(234) 567 89 99
					</Link>
					{"            "}
				</StackItem>
			</Stack>
			<Stack
				quarkly-title="Stack__main-content"
				width="100%"
				margin="0"
				position="relative"
				md-flex-direction="column"
				z-index="3"
			>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" />
					{"        "}
					<Text
						font="normal bold 46px/1.5 --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						display="inline-block"
						quarkly-title="title"
						color="#fff"
						sm-font="normal bold 33px/1.5 --fontFamily-googleMontserrat"
						lg-font="normal bold 36px/1.5 --fontFamily-googleMontserrat"
					>
						Бесконтактная доставка{" "}
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										color="#ed1d39"
									>
										японской
									</Span>
									{" "}
									<Span
										color="rgb(237, 29, 57)"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										кухни
									</Span>
								</Span>
							</Span>
						</Span>
					</Text>
					<Box />
					<Text
						quarkly-title="subtitle"
						color="#fff"
						font="500 19px/30px --fontFamily-googleMontserrat"
						border-color="#ed1d39"
						border-width="2px"
						border-style="solid"
						border-radius="6px"
						padding="20px"
						md-margin="16px 0px 50px 0px"
						margin="16px 0px 40px 0px"
					>
						Не отказывайте себе в удовольствии! Теперь вам совершенно необязательно лично общаться с курьерами
					</Text>
					<Link
						href="#"
						quarkly-title="main__btn"
						color="#fff"
						text-decoration-line="initial"
						font="500 17px --fontFamily-googleMontserrat"
						background="#ed1d39"
						display="block"
						padding="15px 40px 15px 40px"
						width="150px"
						border-radius="6px"
						sm-align-self="flex-start"
					>
						Заказать сейчас
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					sm-display="none"
					md-width="100%"
					background="rgba(0, 0, 0, 0) url(http://ipic.su/img/img7/fs/full_amCIGjK1.1597480857.png) 50% 50% /cover no-repeat border-box"
					md-display="none"
					lg-background="rgba(0, 0, 0, 0) url(http://ipic.su/img/img7/fs/full_amCIGjK1.1597480857.png) 50% 50% /contain no-repeat padding-box"
				>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section quarkly-title="Section__discount" justify-content="center" align-items="center" height="100%">
			<Override slot="SectionContent" justify-content="center" align-items="center" height="100%" />
			<Text
				quarkly-title="discount__title"
				font="700 38px/55px --fontFamily-googleMontserrat"
				margin="50px 0px 100px 0px"
				sm-text-align="center"
				sm-margin="50px 0px 100px 0px"
				sm-width="70%"
			>
				Как получить скидку?
			</Text>
			<Stack
				quarkly-title="discount__list"
				justify-content="center"
				align-items="center"
				height="200px"
				width="100%"
				margin="-16px -16px 50px -16px"
				md-justify-content="space-around"
				sm-height="100%"
				sm-margin="-16px -16px 50px -16px"
				md-height="100%"
			>
				{"    "}
				<StackItem
					width="30%"
					display="flex"
					flex-direction="column"
					height="100%"
					margin="0px 20px 0px 0px"
					md-margin="0px 0px 0px 0px"
					sm-width="50%"
					sm-justify-content="center"
					sm-align-items="center"
					md-width="50%"
					md-height="200px"
					sm-height="100%"
					md-min-width="240px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="flex-start"
						height="20%"
						md-min-width="240px"
					/>
					{"        "}
					<Image
						width="100px"
						height="100px"
						src="https://svgshare.com/i/Nj6.svg"
						margin="0px 0px 20px 0px"
						sm-height="80px"
					/>
					<Text
						font="normal 500 15px/1.5 --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						display="inline-block"
						align-self="center"
						lg-text-align="center"
						text-align="center"
					>
						Закажите сеты на нашем сайте
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="30%"
					display="flex"
					flex-direction="column"
					height="100%"
					margin="0px 20px 0px 0px"
					md-margin="0px 0px 0px 0px"
					sm-width="50%"
					md-width="50%"
					md-height="200px"
					sm-height="100%"
					md-min-width="240px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="flex-start"
						height="200px"
						md-height="25%"
						sm-width="100%"
					/>
					{"        "}
					<Image
						width="100px"
						height="100px"
						src="https://svgshare.com/i/Nk9.svg"
						margin="0px 0px 20px 0px"
						sm-height="80px"
					/>
					<Text
						font="normal 500 15px/1.5 --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						display="inline-block"
						align-self="center"
						lg-text-align="center"
						text-align="center"
						sm-width="100%"
					>
						Введите промокод{" "}
						<Span font="700 15px/22.5px Montserrat, sans-serif">
							FREESET
						</Span>
						{" "}при оформлении заказа
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="30%"
					display="flex"
					height="100%"
					sm-width="50%"
					md-width="50%"
					sm-height="100%"
					md-min-width="240px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="flex-start"
						height="150px"
						md-width="50%"
						sm-width="50%"
					/>
					<Image width="100px" height="100px" src="https://svgshare.com/i/Nio.svg" margin="0px 0px 20px 0px" />
					<Text
						font="normal 500 15px/1.5 --fontFamily-googleMontserrat"
						display="block"
						align-self="center"
						margin="0 0px 0px 0px"
						text-align="center"
						sm-display="inline-block"
					>
						Стоимость сета автоматически уменьшится на 50%
					</Text>
				</StackItem>
			</Stack>
			<Text
				font="500 15px --fontFamily-googleMontserrat"
				color="rgb(181, 161, 164)"
				margin="20px 0px 100px 0px"
				sm-text-align="center"
				sm-width="70%"
			>
				Акция не распространяется на сеты из категории «Горячие»
			</Text>
		</Section>
		<Section
			quarkly-title="Section__timer"
			position="relative"
			height="100%"
			justify-content="center"
			align-items="center"
			md-height="100%"
		>
			<Box
				background="rgba(0,0,0,.4);"
				position="absolute"
				width="100%"
				height="100%"
				bottom="-17px"
				left="0px"
				right="-8px"
				top="-2px"
				z-index="1"
				opacity="1"
			/>
			<Image
				width="100%"
				height="100%"
				src="http://ipic.su/img/img7/fs/full_5oWIwcL3.1597480516.jpg"
				position="absolute"
				bottom="0px"
				left="auto"
				right="0px"
				top="auto"
				object-fit="cover"
				z-index="0"
			/>
			<Stack
				flex-direction="column"
				align-items="center"
				quarkly-title="timer__content"
				color="#fff"
				position="relative"
				md-margin="20px -16px 20px -16px"
				margin="50px -16px 50px -16px"
				z-index="2"
			>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%" lg-width="100%">
					<Override slot="StackItemContent" justify-content="center" />
					{"        "}
					<Text
						font="normal bold 28px/1.5 --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						display="block"
						quarkly-title="timer__title"
						sm-text-align="center"
					>
						До конца акции осталось
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="flex" sm-flex-wrap="wrap">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Stack sm-flex-direction="column" sm-width="100%" sm-align-items="center" flex-direction="row">
						{"    "}
						<StackItem
							width="30%"
							display="none"
							sm-padding="16px 16px 0 16px"
							align-items="center"
							justify-content="center"
							padding="0 0px 0 0"
							sm-display="block"
						>
							<Override
								slot="StackItemContent"
								sm-align-items="center"
								sm-justify-content="center"
								align-items="flex-start"
								justify-content="center"
							/>
							<Box
								display="flex"
								flex-direction="column"
								align-items="center"
								sm-display="flex"
								sm-justify-content="center"
							>
								<Text
									font="normal 700 63px/1.5 --fontFamily-googleMontserrat"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ffffff"
									sm-font="normal 700 63px/1.5 --fontFamily-googleMontserrat"
								>
									00
								</Text>
								<Text font="normal 400 15px/1.5 --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
									дней
								</Text>
							</Box>
							{"            "}
						</StackItem>
						{"    "}
						<StackItem
							width="100%"
							display="flex"
							sm-width="100%"
							sm-justify-content="center"
							sm-align-items="center"
							padding="16px 0px 16px 0px"
						>
							<Override
								slot="StackItemContent"
								sm-justify-content="center"
								sm-align-items="center"
								justify-content="center"
								align-items="center"
							/>
							<Box
								display="flex"
								flex-direction="column"
								align-items="center"
								sm-display="none"
								sm-justify-content="center"
							>
								<Text
									font="normal 700 63px/1.5 --fontFamily-googleMontserrat"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ffffff"
									sm-font="normal 700 63px/1.5 --fontFamily-googleMontserrat"
								>
									00
								</Text>
								<Text font="normal 400 15px/1.5 --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
									дней
								</Text>
							</Box>
							<Text
								font="normal 700 63px/1.5 --fontFamily-googleMontserrat"
								margin="-34px 8px 0px 8px"
								display="inline-block"
								color="#ffffff"
								height="auto"
								padding="0px 0px 0px 0px"
								sm-display="none"
								align-self="center"
							>
								:
							</Text>
							<Box display="flex" flex-direction="column" align-items="center" background="https://svgshare.com/i/Nio.svg">
								<Text
									font="normal 700 63px/1.5 --fontFamily-googleMontserrat"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ffffff"
									sm-font="normal 700 43px/1.5 --fontFamily-googleMontserrat"
								>
									00
								</Text>
								<Text font="normal 400 15px/1.5 --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
									часов
								</Text>
							</Box>
							<Text
								font="normal 700 63px/1.5 --fontFamily-googleMontserrat"
								margin="-34px 8px 0px 8px"
								display="inline-block"
								color="#ffffff"
								height="auto"
								padding="0px 0px 0px 0px"
								sm-font="normal 700 43px/1.5 --fontFamily-googleMontserrat"
							>
								:
							</Text>
							<Box display="flex" flex-direction="column" align-items="center">
								<Text
									font="normal 700 63px/1.5 --fontFamily-googleMontserrat"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ffffff"
									sm-font="normal 700 43px/1.5 --fontFamily-googleMontserrat"
								>
									00
								</Text>
								<Text font="normal 400 15px/1.5 --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
									минут
								</Text>
							</Box>
							<Text
								font="normal 700 63px/1.5 --fontFamily-googleMontserrat"
								margin="-34px 8px 0px 8px"
								display="inline-block"
								color="#ffffff"
								height="auto"
								padding="0px 0px 0px 0px"
								sm-font="normal 700 43px/1.5 --fontFamily-googleMontserrat"
							>
								:
							</Text>
							<Box display="flex" flex-direction="column" align-items="center">
								<Text
									font="normal 700 63px/1.5 --fontFamily-googleMontserrat"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ffffff"
									sm-font="normal 700 43px/1.5 --fontFamily-googleMontserrat"
								>
									00
								</Text>
								<Text font="normal 400 15px/1.5 --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
									секунд
								</Text>
							</Box>
							<Box display="flex" flex-direction="row" align-items="flex-start" justify-content="center" />
							{"            "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section quarkly-title="Section__sets" position="relative" md-height="100%" height="100%">
			<Override slot="SectionContent" justify-content="center" />
			<Box
				background="rgba(0,0,0,.2);"
				position="absolute"
				width="100%"
				height="100%"
				bottom="auto"
				left="0px"
				right="auto"
				top="0px"
				opacity="0.1"
			/>
			<Text
				align-self="center"
				quarkly-title="sets__title"
				position="relative"
				font="700 38px/55px --fontFamily-googleMontserrat"
				margin="100px 0px 60px 0px"
				height="100px"
				sm-margin="100px 0px 0px 0px"
			>
				Сеты к заказу
			</Text>
			<Stack
				position="relative"
				margin="-16px -16px 100px -16px"
				height="100%"
				width="100%"
				sm-align-items="center"
				sm-justify-content="center"
				sm-align-self="center"
				lg-align-self="center"
				lg-justify-content="center"
				align-self="center"
				justify-content="center"
			>
				{"    "}
				<StackItem
					display="flex"
					height="800px"
					align-items="center"
					justify-content="center"
					width="33%"
					md-width="100%"
					md-height="1000px"
					sm-height="600px"
					lg-width="50%"
					lg-height="800px"
					padding="16px 0px 16px 0px"
					min-width="350px"
					lg-min-width="250px"
				>
					<Override slot="StackItemContent" width="33%" height="100%" justify-content="center" />
					<Box
						display="flex"
						flex-direction="column"
						width="100%"
						align-items="center"
						justify-content="center"
						height="100%"
						margin="0px 0px 0px 0px"
					>
						<Image
							width="300px"
							object-fit="cover"
							src="http://ipic.su/img/img7/fs/1.1597481547.png"
							height="300px"
							md-height="100%"
							md-width="100%"
							margin="0px 0px 50px 0px"
							md-display="block"
						/>
						<Text font="700 28px/55px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="block" quarkly-title="title">
							Сяки май тай
						</Text>
						<Text
							quarkly-title="content"
							font="500 15px/24px --fontFamily-googleMontserrat"
							color="rgb(181, 161, 164)"
							text-align="center"
							margin="10px 0px 16px 0px"
							sm-width="100%"
							sm-height="100px"
						>
							Филадельфия, Калифорния Классик, Калифорния Люкс, Радуга, Тунец
						</Text>
						<Text quarkly-title="Price" font="400 28px --fontFamily-googleMontserrat">
							<Span text-decoration-line="line-through" color="rgb(181, 161, 164)">
								1800{" "}
							</Span>
							<Span
								color="rgb(237, 29, 57)"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="700 28px Montserrat, sans-serif"
							>
								900 руб
							</Span>
							.
						</Text>
						<Link
							href="https://ukit.com/sites/url/qthxx0l76/pages/id/index/constructor#=sP-gQ=5ec51048472b972cefa91d93"
							font="500 --fontFamily-googleMontserrat"
							text-decoration-line="initial"
							background="#ed1d39"
							color="#fff"
							padding="10px 30px 10px"
							border-radius="6px"
							margin="50px 0px 0px 0px"
						>
							Заказать
						</Link>
					</Box>
					{"            "}
				</StackItem>
				<StackItem
					width="33%"
					display="flex"
					height="800px"
					align-items="center"
					justify-content="center"
					md-width="100%"
					md-height="1000px"
					sm-height="600px"
					lg-width="50%"
					lg-height="800px"
					padding="16px 0px 16px 0px"
					lg-min-width="250px"
					min-width="350px"
				>
					<Override slot="StackItemContent" width="33%" height="100%" justify-content="center" />
					<Box
						display="flex"
						flex-direction="column"
						width="100%"
						align-items="center"
						justify-content="center"
						height="100%"
						md-height="700p"
					>
						<Image
							width="300px"
							height="300px"
							src="http://ipic.su/img/img7/fs/2.1597481620.png"
							object-fit="cover"
							md-height="100%"
							md-width="100%"
							margin="0px 0px 50px 0px"
							md-align-self="center"
						/>
						<Text font="700 28px/55px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="block" quarkly-title="title">
							Сяки яки тори
						</Text>
						<Text
							quarkly-title="content"
							font="500 15px/24px --fontFamily-googleMontserrat"
							color="rgb(181, 161, 164)"
							text-align="center"
							sm-height="100px"
							margin="10px 0px 16px 0px"
						>
							Императорский дракон, Острый угорь, Сливочный Лосось, Филадельфия{" "}
						</Text>
						<Text quarkly-title="Price" font="400 28px --fontFamily-googleMontserrat">
							<Span color="rgb(181, 161, 164)" text-decoration-line="line-through">
								1200
							</Span>
							{" "}
							<Span
								color="rgb(237, 29, 57)"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="700 28px Montserrat, sans-serif"
							>
								600 руб
							</Span>
							.
						</Text>
						<Link
							href="https://ukit.com/sites/url/qthxx0l76/pages/id/index/constructor#=sP-gQ=5ec51048472b972cefa91d93"
							font="500 --fontFamily-googleMontserrat"
							text-decoration-line="initial"
							background="#ed1d39"
							color="#fff"
							padding="10px 30px 10px"
							border-radius="6px"
							margin="50px 0px 0px 0px"
						>
							Заказать
						</Link>
					</Box>
					{"            "}
				</StackItem>
				<StackItem
					width="33%"
					display="flex"
					height="800ox%"
					align-items="center"
					justify-content="center"
					md-width="100%"
					md-height="1000px"
					sm-height="600px"
					lg-width="50%"
					lg-height="800px"
					padding="16px 0px 16px 0px"
					lg-min-width="250px"
					min-width="350px"
				>
					<Override slot="StackItemContent" width="33%" height="100%" justify-content="center" />
					<Box
						display="flex"
						flex-direction="column"
						width="100%"
						align-items="center"
						justify-content="center"
						height="100%"
					>
						<Image
							width="300px"
							height="300px"
							object-fit="cover"
							src="http://ipic.su/img/img7/fs/3.1597481660.png"
							md-height="100%"
							md-width="100%"
							margin="0px 0px 50px 0px"
						/>
						<Text font="700 28px/55px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="block" quarkly-title="title">
							Эби ясай
						</Text>
						<Text
							quarkly-title="content"
							font="500 15px/24px --fontFamily-googleMontserrat"
							color="rgb(181, 161, 164)"
							text-align="center"
							sm-height="100px"
							margin="10px 0px 16px 0px"
						>
							Калифорния Классик, Калифрония Угорь, Филадельфия Классик{" "}
						</Text>
						<Text quarkly-title="Price">
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="400 28px --fontFamily-googleMontserrat"
							>
								<Span text-decoration-line="line-through" color="rgb(181, 161, 164)">
									1500
								</Span>
								{" "}
								<Span
									color="rgb(237, 29, 57)"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									font="700 28px Montserrat, sans-serif"
								>
									750 руб
								</Span>
								.
							</Span>
						</Text>
						<Link
							href="https://ukit.com/sites/url/qthxx0l76/pages/id/index/constructor#=sP-gQ=5ec51048472b972cefa91d93"
							font="500 17px --fontFamily-googleMontserrat"
							text-decoration-line="initial"
							background="#ed1d39"
							color="#fff"
							padding="10px 30px 10px"
							border-radius="6px"
							margin="50px 0px 0px 0px"
						>
							Заказать
						</Link>
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			quarkly-title="Section__info"
			height="100%"
			justify-content="center"
			align-items="center"
			sm-height="100%"
		>
			<Override slot="SectionContent" justify-content="space-around" height="600px" sm-height="100%" />
			<Text align-self="center" font="700 38px/55px --fontFamily-googleMontserrat" margin="0 0px 0" sm-margin="0 0px 50px 0px">
				Почему мы?
			</Text>
			<Stack sm-flex-direction="column" sm-margin="-16px -16px 50px -16px">
				{"    "}
				<StackItem width="25%" display="flex" md-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						width="25%"
						height="100%"
						flex-direction="column"
						align-items="center"
					/>
					{"        "}
					<Image width="64px" height="64px" src="https://svgshare.com/i/Nj7.svg" margin="0px 0px 20px 0px" />
					<Text font="normal 700 15px/1.5 --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" quarkly-title="info__title">
						Безопасная доставка
					</Text>
					<Text
						quarkly-title="info__subtitle"
						font="normal 500 15px/1.5 --fontFamily-googleMontserrat"
						color=" rgb(181, 161, 164)"
						margin="0px 0px 16px"
						lg-text-align="center"
					>
						Все меры предосторожности
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" md-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						width="25%"
						height="100%"
						flex-direction="column"
						align-items="center"
					/>
					{"        "}
					<Image width="64px" height="64px" src="https://svgshare.com/i/Njz.svg" margin="0px 0px 20px 0px" />
					<Text font="normal 700 15px/1.5 --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" quarkly-title="info__title">
						Опытные повара{" "}
					</Text>
					<Text
						quarkly-title="info__subtitle"
						font="normal 500 15px/1.5 --fontFamily-googleMontserrat"
						color=" rgb(181, 161, 164)"
						text-align="center"
						margin="0px 0px"
					>
						Блюда готовятся профессионалами
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" md-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						width="25%"
						height="100%"
						flex-direction="column"
						align-items="center"
					/>
					{"        "}
					<Image width="64px" height="64px" src="https://svgshare.com/i/NjL.svg" margin="0px 0px 20px 0px" />
					<Text font="normal 700 15px/1.5 --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" quarkly-title="info__title">
						Онлайн оплата
					</Text>
					<Text quarkly-title="info__subtitle" font="normal 500 15px/1.5 --fontFamily-googleMontserrat" color=" rgb(181, 161, 164)" margin="0px">
						Платите как удобно
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" md-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						width="25%"
						height="100%"
						flex-direction="column"
						align-items="center"
					/>
					{"        "}
					<Image width="64px" height="64px" src="https://svgshare.com/i/Nk9.svg" margin="0px 0px 20px 0px" />
					<Text font="normal 700 15px/1.5 --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" quarkly-title="info__title">
						Вкусные рецепты{" "}
					</Text>
					<Text
						quarkly-title="info__subtitle"
						font="500 15px --fontFamily-googleMontserrat"
						color=" rgb(181, 161, 164)"
						text-align="center"
						margin="0px 0px 16px 0px"
					>
						Совершенствуем рецептуру наших блюд{" "}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Box align-self="center" sm-width="70%" sm-text-align="center" sm-margin="0px 0px 100px 0px">
				<Text font="700 28px/55px --fontFamily-googleMontserrat" sm-width="100%">
					Быстрая доставка от{" "}
					<Span color="rgb(237, 29, 57)">
						30 минут
					</Span>
				</Text>
				<Text font="500 15px --fontFamily-googleMontserrat" color=" rgb(181, 161, 164)" text-align="center">
					В зависимости от района доставляем за 30-60 минут
				</Text>
			</Box>
		</Section>
		<Section
			quarkly-title="Section_stock"
			position="relative"
			height="500px"
			justify-content="center"
			align-items="center"
		>
			<Box
				background="rgba(0,0,0,.4);"
				position="absolute"
				width="100%"
				height="100%"
				bottom="auto"
				left="0px"
				right="auto"
				top="0px"
				z-index="1"
				opacity="1"
				display="block"
			/>
			<Image
				width="100%"
				height="100%"
				src="http://ipic.su/img/img7/fs/full_5oWIwcL3.1597480516.jpg"
				position="absolute"
				top="auto"
				right="0px"
				bottom="0px"
				left="auto"
				object-fit="cover"
			/>
			<Stack position="relative" z-index="2">
				{"    "}
				<StackItem width="100%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					{"        "}
					<Text
						font="700 46px/55px --fontFamily-googleMontserrat"
						margin="0px 0px 20px 0px"
						display="inline-block"
						color="#fff"
						sm-text-align="center"
						sm-font="700 36px/55px --fontFamily-googleMontserrat"
					>
						Скидка{" "}
						<Span color="rgb(237, 29, 57)">
							50%
						</Span>
						{" "}ждёт тебя!
					</Text>
					<Text
						color="#fff"
						font="700 19px/30px --fontFamily-googleMontserrat"
						text-align="center"
						border-width="2px"
						border-style="solid"
						border-color="#ed1d39"
						border-radius="6px"
						padding="10px 20px 10px"
						width="700px"
						margin="16px 0px 50px 0px"
						md-width="100%"
						sm-width="70%"
						sm-padding="50px 20px 50px 20px"
						sm-display="block"
						sm-align-items="center"
						sm-justify-content="center"
					>
						Используйте промокод{" "}
						<Span color="rgb(237, 29, 57)">
							FREESET
						</Span>
						{" "}и получайте скидку 50%
					</Text>
					<Link
						href="https://ukit.com/sites/url/qthxx0l76/pages/id/index/constructor#=8A-Ql=5ec51048472b972cefa91d93"
						color="#ffff"
						text-decoration-line="initial"
						font="500 17px/27px --fontFamily-googleMontserrat"
						padding="15px 40px 15px 40px"
						background="#ed1d39"
						border-radius="6px"
					>
						Заказать сейчас
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section quarkly-title="Section__footer" sm-justify-content="center">
			<Override slot="SectionContent" sm-margin="20px 28.7969px 20px 28.7969px" />
			<Box align-self="center">
				<Text font="500 15px/27px --fontFamily-googleMontserrat" color=" rgb(181, 161, 164)" text-align="center">
					ООО «Sushi»{" "}
					<br />
				</Text>
				<Text font="500 15px/24px --fontFamily-googleMontserrat" text-align="center">
					+1 (234) 567 89 99
				</Text>
			</Box>
		</Section>
		<Section>
			<Box />
		</Section>
		<Components.Bfaftr before="https://images.unsplash.com/photo-1600674013229-70242d12fbe1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30" after="https://images.unsplash.com/photo-1600506639292-cb7ac26d3a06?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30" />
		<Section>
			<Icon category="md" icon={MdRowing} size="48px" />
		</Section>
		<Image width="64px" height="64px" />
	</Theme>;
});