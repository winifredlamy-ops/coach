import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './CourseDetail.css'

const Svg: React.FC<{ path: string; className?: string }> = ({ path, className }) => (
	<svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d={path} />
	</svg>
)

const IconArrowLeft: React.FC = () => <Svg path="M19 12H5 M12 19l-7-7 7-7" />
const IconEdit: React.FC = () => <Svg path="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />

export const CourseDetail: React.FC = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	return (
		<div className="page">
			<div className="detail-header">
				<button
					className="back-btn"
					onClick={() => navigate('/courses')}
				>
					<IconArrowLeft />
				</button>
				<h1 className="page-title">课程详情</h1>
				<button className="edit-btn">
					<IconEdit />
				</button>
			</div>

			<div className="course-info card">
				<h2>网球基础班</h2>
				<p className="course-description">
					适合零基础学员，学习基本的握拍、挥拍技巧，培养对网球运动的兴趣。
				</p>
				<div className="course-details">
					<div className="detail-row">
						<span className="label">课程类型:</span>
						<span className="value">小团课</span>
					</div>
					<div className="detail-row">
						<span className="label">课程时长:</span>
						<span className="value">90分钟</span>
					</div>
					<div className="detail-row">
						<span className="label">最大人数:</span>
						<span className="value">6人</span>
					</div>
					<div className="detail-row">
						<span className="label">课程价格:</span>
						<span className="value price">¥120</span>
					</div>
					<div className="detail-row">
						<span className="label">上课地点:</span>
						<span className="value">1号场地</span>
					</div>
				</div>
			</div>

			<div className="placeholder">
				<p className="muted">课程ID: {id}</p>
				<p className="muted">其他功能开发中...</p>
			</div>
		</div>
	)
}