import {
	MultiChatSocket,
	MultiChatWindow,
	useMultiChatLogic,
} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
	const chatProps = useMultiChatLogic(
		'5804f2da-eac0-472d-a28a-e6de67a5a07c',
		props.user.username,
		props.user.secret
	);
	return (
		<div style={{ height: '100vh' }}>
			<MultiChatSocket {...chatProps} />
			<MultiChatWindow {...chatProps} style={{ height: '100%' }} />
		</div>
	);
};

export default ChatsPage;
