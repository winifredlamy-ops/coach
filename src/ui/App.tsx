import React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import './App.css'
import { Home } from './Home'
import { Courses } from './Courses'
import { Bookings } from './Bookings'
import { Students } from './Students'
import { Profile } from './Profile'
import { CourseDetail } from './CourseDetail'
import { BookingDetail } from './BookingDetail'
import { CreateCourse } from './CreateCourse'

const Svg: React.FC<{ path: string; className?: string }> = ({ path, className }) => (
	<svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden>
		<path d={path} fill="currentColor" />
	</svg>
)

const IconHome: React.FC = () => <Svg path="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
const IconBook: React.FC = () => <Svg path="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
const IconUsers: React.FC = () => <Svg path="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
const IconCalendar: React.FC = () => <Svg path="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
const IconUser: React.FC = () => <Svg path="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />

export const App: React.FC = () => {
	return (
		<div className="app-root">
			<div className="app-content">
				<Routes>
					<Route path="/" element={<Navigate to="/home" replace />} />
					<Route path="/home" element={<Home />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/courses/create" element={<CreateCourse />} />
					<Route path="/courses/:id" element={<CourseDetail />} />
					<Route path="/bookings" element={<Bookings />} />
					<Route path="/bookings/:id" element={<BookingDetail />} />
					<Route path="/students" element={<Students />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="*" element={<Navigate to="/home" replace />} />
				</Routes>
			</div>
			<nav className="tabbar">
				<NavLink to="/home" className={({ isActive }) => isActive ? 'tab active' : 'tab'} end>
					<IconHome />
					<span>首页</span>
				</NavLink>
				<NavLink to="/courses" className={({ isActive }) => isActive ? 'tab active' : 'tab'} end>
					<IconBook />
					<span>课程</span>
				</NavLink>
				<NavLink to="/bookings" className={({ isActive }) => isActive ? 'tab active' : 'tab'} end>
					<IconCalendar />
					<span>预约</span>
				</NavLink>
				<NavLink to="/students" className={({ isActive }) => isActive ? 'tab active' : 'tab'} end>
					<IconUsers />
					<span>学员</span>
				</NavLink>
				<NavLink to="/profile" className={({ isActive }) => isActive ? 'tab active' : 'tab'} end>
					<IconUser />
					<span>我的</span>
				</NavLink>
			</nav>
		</div>
	)
}