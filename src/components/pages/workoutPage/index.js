import { NavLink } from 'react-router-dom';
import * as S from './workout.style';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { MenuProfile } from '../../menuProf/MenuProfile';
import { useEffect, useState } from 'react';
import { getUserLessons, auth, changeStatusExercises} from '../../api/api';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/actions/creators';

export const WorkOut = () => {

	const dispatch = useDispatch();

 	const [color, setColor] = useState();

	const name = localStorage.getItem('name');

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	const [userLesson, setUserLesson] = useState(null);

	const storedLesson = window.localStorage.getItem('lesson');
	const indexExercise = window.localStorage.getItem('indexExercise');
	const nameCourse = window.localStorage.getItem('nameCourse');
	const lesson = storedLesson ? JSON.parse(storedLesson) : null;

	const renderExercises = () => {
		if (lesson.exercises && lesson.exercises.length > 0) {
			return  lesson.exercises.map((exercise, index) => (
				<S.LiEx key={index}>{exercise}</S.LiEx>
			));
		} else {
			return '';
		}
	};


	const colorMapping = [
		{colorBorder:"#565EEF", colorBG:"#EDECFF"},
		{colorBorder:"#FF6D00", colorBG:"#FFF2E0"},
		{colorBorder:"#9A48F1", colorBG:"#F9EBFF"},
		{colorBorder:"#FFD700", colorBG:"#FFFFE0"},
	]

	  
	const renderExercisesProgress = () => {
		const cfr = /\d+/;
		if (lesson.exercises && lesson.exercises.length > 0) {
			return  lesson.exercises.map((exercise, index) => (
				<S.ProgressItem>
					<S.Ex key={index}>{exercise.slice(0, exercise.indexOf("("))}</S.Ex>
					<S.ExProg  $colorBorder={colorMapping[index].colorBorder}  $colorBG={colorMapping[index].colorBG}                     
						type="range"
						min={0}
						max={exercise.match(cfr)[0]}
						value={userLesson[nameCourse].workout[indexExercise].exercisesCounter[index]}
						step={1}
						$color="#ffffff"
						disabled>
					</S.ExProg>
				</S.ProgressItem>

			));
		} else {
			return '';
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				(async () => {
					try {
						const userData = await getUserLessons();
						dispatch(signIn(userData));
						setUserLesson(userData.courses);
					} catch (error) {
						console.log(error);
					}
				})();
			} else {
			}
		});

		return () => unsubscribe();
	}, []);

	useEffect(() => {
		setColor(false);
	}, []);

	function mouseOut() {
		if (isOpen) {
			toggleOpen();
		}
	}



	useEffect(() => {

		var regex = /embed\/(.+)/;
		var videoId = lesson.link.match(regex)[1];

		const tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';
		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		let player;

	let checkYT = setInterval(() => {
		if (window.YT){
			clearInterval(checkYT);
			window.YT.ready(function() {
				player = new window.YT.Player('player', {
					height: '639',
					width: '1160',
					videoId: videoId,
					playerVars: {
						origin: window.location.origin,
					  },
					events: {
					  'onStateChange': onPlayerStateChange
					}
			 	});
			})
		}
	}, 100);

		function onPlayerStateChange(event) {
		  if (event.data === window.YT.PlayerState.ENDED) {
			if (nameCourse === "dancefitness" || nameCourse === "stepaerobics") {
				changeStatusExercises(nameCourse, indexExercise)
				console.log("Video Ended");
			}
		  }
		}
	  }, []);

	return (
		<S.Wrapper>
			<S.LogoHeader>
				<NavLink to='/'>
					<S.Logo src='/logo2.png'></S.Logo>
				</NavLink>
				<S.MenuStyle onMouseLeave={mouseOut} onClick={toggleOpen}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='50'
						height='50'
						viewBox='0 0 50 50'
						fill='none'
					>
						<circle
							cx='25'
							cy='25'
							r='25'
							fill={color ? 'rgb(105, 105, 105)' : '#D9D9D9'}
						/>
					</svg>
					<S.SpanName $color={color}>{name}</S.SpanName>
					<MenuProfile color={color} isOpen={isOpen} />
				</S.MenuStyle>
			</S.LogoHeader>
			<S.MyProf>{lesson.name}</S.MyProf>
			<div id="player"></div>
			<S.ExProgress>
				<S.ListOfExercises>
					<S.SpanEx>Упражнения:</S.SpanEx>
					<S.UlEx>{renderExercises()}</S.UlEx>
					<S.ButtonProgress>Заполнить свой прогресс</S.ButtonProgress>
				</S.ListOfExercises>
				<S.Progress>
					<S.SpanEx>Мой прогресс по тренировке {Number(indexExercise) + Number(1)}:</S.SpanEx>
					{userLesson && 
						<S.ProgressMain>
						{ renderExercisesProgress()}
						</S.ProgressMain>
					}
				</S.Progress>
			</S.ExProgress>
		</S.Wrapper>
	);
};
