import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateCourse.css'

const Svg: React.FC<{ path: string; className?: string }> = ({ path, className }) => (
	<svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d={path} />
	</svg>
)

const IconArrowLeft: React.FC = () => <Svg path="M19 12H5 M12 19l-7-7 7-7" />
const IconSave: React.FC = () => <Svg path="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />

export const CreateCourse: React.FC = () => {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		name: '',
		type: '小团课',
		duration: 90,
		maxStudents: 6,
		price: 120,
		location: '',
		description: '',
		level: '初级'
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('创建课程:', formData)
		navigate('/courses')
	}

	const handleSaveDraft = () => {
		console.log('保存草稿:', formData)
		navigate('/courses')
	}

	const updateField = (field: string, value: string | number) => {
		setFormData(prev => ({
			...prev,
			[field]: value
		}))
	}

	return (
		<div className="page">
			<div className="create-header">
				<button
					className="back-btn"
					onClick={() => navigate('/courses')}
				>
					<IconArrowLeft />
				</button>
				<h1 className="page-title">新建课程</h1>
				<button
					className="save-btn"
					onClick={handleSaveDraft}
				>
					<IconSave />
				</button>
			</div>

			<form onSubmit={handleSubmit} className="create-form">
				<div className="form-section">
					<label className="form-label">课程名称</label>
					<input
						type="text"
						className="input"
						placeholder="请输入课程名称"
						value={formData.name}
						onChange={(e) => updateField('name', e.target.value)}
						required
					/>
				</div>

				<div className="form-section">
					<label className="form-label">课程类型</label>
					<select
						className="input"
						value={formData.type}
						onChange={(e) => updateField('type', e.target.value)}
					>
						<option value="小团课">小团课</option>
						<option value="私教课">私教课</option>
						<option value="体验课">体验课</option>
					</select>
				</div>

				<div className="form-row">
					<div className="form-section">
						<label className="form-label">课程时长（分钟）</label>
						<input
							type="number"
							className="input"
							value={formData.duration}
							onChange={(e) => updateField('duration', parseInt(e.target.value))}
							min="30"
							max="180"
							step="15"
						/>
					</div>
					<div className="form-section">
						<label className="form-label">最大人数</label>
						<input
							type="number"
							className="input"
							value={formData.maxStudents}
							onChange={(e) => updateField('maxStudents', parseInt(e.target.value))}
							min="1"
							max="20"
						/>
					</div>
				</div>

				<div className="form-section">
					<label className="form-label">课程价格（元）</label>
					<input
						type="number"
						className="input"
						placeholder="请输入价格"
						value={formData.price}
						onChange={(e) => updateField('price', parseInt(e.target.value))}
						min="0"
						step="10"
						required
					/>
				</div>

				<div className="form-section">
					<label className="form-label">上课地点</label>
					<select
						className="input"
						value={formData.location}
						onChange={(e) => updateField('location', e.target.value)}
						required
					>
						<option value="">请选择场地</option>
						<option value="1号场地">1号场地</option>
						<option value="2号场地">2号场地</option>
						<option value="3号场地">3号场地</option>
						<option value="4号场地">4号场地</option>
					</select>
				</div>

				<div className="form-section">
					<label className="form-label">适合级别</label>
					<select
						className="input"
						value={formData.level}
						onChange={(e) => updateField('level', e.target.value)}
					>
						<option value="初级">初级</option>
						<option value="中级">中级</option>
						<option value="高级">高级</option>
						<option value="不限">不限</option>
					</select>
				</div>

				<div className="form-section">
					<label className="form-label">课程描述</label>
					<textarea
						className="input textarea"
						placeholder="请描述课程内容、适合人群等..."
						value={formData.description}
						onChange={(e) => updateField('description', e.target.value)}
						rows={4}
					/>
				</div>

				<div className="form-actions">
					<button
						type="button"
						className="btn btn-outline"
						onClick={handleSaveDraft}
					>
						保存草稿
					</button>
					<button
						type="submit"
						className="btn btn-primary"
					>
						发布课程
					</button>
				</div>
			</form>
		</div>
	)
}