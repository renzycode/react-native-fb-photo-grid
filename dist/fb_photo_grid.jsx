import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

class FBPhotoGrid extends Component {
	renderPhoto = ({ photoUri, containerHeight, heightDivisor, gutterSize }) => {
		const photoSource = { uri: photoUri };
		return (
			<Image
				source={photoSource}
				style={{
					resizeMode: 'cover',
					width: '100%',
					height: containerHeight / heightDivisor - gutterSize,
				}}
			/>
		);
	};

	render() {
		const { 
			height = 400, 
			gutterColor = '#fff', 
			photos = [], 
			gutterSize = 2, 
			onTouchPhoto = () => {}
		} = this.props;
		let num = 0;

		return (
			<View style={{ width: '100%', height, backgroundColor: gutterColor }}>
				{photos.length >= 1 && (
					<View style={{ padding: gutterSize }}>
						{photos.length > 2 && (
							<View style={{ flexDirection: 'row', width: '100%' }}>
								{[...Array(photos.length >= 5 ? 2 : 1)].map((_, index) => {
									num += 1;
									const photoInnerIndex = num - 1;
									return (
										<TouchableOpacity
											key={index}
											onPress={() => onTouchPhoto(photos[photoInnerIndex], photoInnerIndex)}
											activeOpacity={0.5}
											style={{ width: photos.length >= 5 ? '50%' : '100%', padding: gutterSize }}
										>
											{this.renderPhoto({
												photoUri: photos[num - 1],
												containerHeight: height,
												heightDivisor: photos.length > 2 ? 2 : 1,
												gutterSize: gutterSize * (photos.length >= 3 ? 3 : 4),
											})}
										</TouchableOpacity>
									);
								})}
							</View>
						)}
						<View style={{ flexDirection: 'row', width: '100%' }}>
							{[...Array(3)].map((_, index) => {
								num += 1;
								const photoInnerIndex = num - 1;
								return (
									<TouchableOpacity
										key={index}
										onPress={() => onTouchPhoto(photos[photoInnerIndex], photoInnerIndex)}
										activeOpacity={0.5}
										style={{
											width: photos.length === 1 ? '100%' : photos.length <= 3 ? '50%' : '33.33%',
											padding: gutterSize,
										}}
									>
										{this.renderPhoto({
											photoUri: photos[num - 1],
											containerHeight: height,
											heightDivisor: photos.length > 2 ? 2 : 1,
											gutterSize: gutterSize * (photos.length >= 3 ? 3 : 4),
										})}
										{num >= 5 && photos.length - 5 !== 0 && (
											<View
												style={{
													width: '100%',
													height: '100%',
													position: 'absolute',
													backgroundColor: 'rgba(50, 50, 50, 0.6)',
													justifyContent: 'center',
													alignItems: 'center',
													top: gutterSize,
													left: gutterSize,
												}}
											>
												<Text style={{ fontSize: 24, color: 'white' }}>
													+{photos.length - 5}
												</Text>
											</View>
										)}
									</TouchableOpacity>
								);
							})}
						</View>
					</View>
				)}
			</View>
		);
	}
}

export default FBPhotoGrid;
