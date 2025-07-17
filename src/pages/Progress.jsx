import React,{useState} from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {useTheme} from '../contexts/ThemeContext';
import {useData} from '../contexts/DataContext';

const {FiTrendingUp,FiUser,FiCalendar,FiAward,FiBookOpen,FiTarget,FiCheck,FiClock}=FiIcons;

const Progress=()=> {
const {darkMode}=useTheme();
const {data}=useData();
const [selectedStudent,setSelectedStudent]=useState('all');
const [selectedCourse,setSelectedCourse]=useState('all');

// Sample progress data 
const progressData=[ 
{id: 1,studentId: 'STU001',studentName: 'Emma Johnson',course: 'Nursery 1',progress: 85,achievements: [ 'Letter A-M mastered','Counting to 10','Favorite Bible verse learned','Colors identification complete' ],lastUpdated: '2024-01-15',skills: {reading: 80,writing: 75,math: 90,social: 85,motor: 88}},
{id: 2,studentId: 'STU002',studentName: 'Liam Chen',course: 'Toddler Program',progress: 70,achievements: [ 'Basic shapes recognition','Simple words pronunciation','Playground safety rules' ],lastUpdated: '2024-01-20',skills: {reading: 65,writing: 60,math: 75,social: 80,motor: 85}},
{id: 3,studentId: 'STU003',studentName: 'Olivia Rodriguez',course: 'Kindergarten',progress: 95,achievements: [ 'Advanced reading skills','Mathematical problem solving','Leadership qualities','Biblical knowledge excellence' ],lastUpdated: '2024-01-25',skills: {reading: 95,writing: 90,math: 98,social: 92,motor: 88}},
{id: 4,studentId: 'STU004',studentName: 'Noah Williams',course: 'Nursery 2',progress: 78,achievements: [ 'Letter recognition A-Z','Number writing 1-20','Prayer memorization' ],lastUpdated: '2024-02-01',skills: {reading: 75,writing: 70,math: 80,social: 85,motor: 82}} 
];

const students=['all',...new Set(progressData.map(p=> p.studentName))];
const courses=['all',...new Set(progressData.map(p=> p.course))];

const filteredProgress=progressData.filter(progress=> {
const matchesStudent=selectedStudent==='all' || progress.studentName===selectedStudent;
const matchesCourse=selectedCourse==='all' || progress.course===selectedCourse;
return matchesStudent && matchesCourse;
});

const getProgressColor=(progress)=> {
if (progress >=90) return 'bg-green-500';
if (progress >=80) return 'bg-blue-500';
if (progress >=70) return 'bg-yellow-500';
return 'bg-red-500';
};

const getSkillColor=(skill)=> {
if (skill >=90) return 'text-green-500';
if (skill >=80) return 'text-blue-500';
if (skill >=70) return 'text-yellow-500';
return 'text-red-500';
};

const formatDate=(dateString)=> {
const date=new Date(dateString);
return date.toLocaleDateString('en-US',{year: 'numeric',month: 'short',day: 'numeric'});
};

const ProgressChart=({skills})=> {
const skillNames=Object.keys(skills);
const maxValue=Math.max(...Object.values(skills));
return ( 
<div className="space-y-3"> 
{skillNames.map((skill)=> ( 
<div key={skill} className="flex items-center space-x-3"> 
<div className="w-20 text-sm font-medium capitalize"> 
{skill} 
</div> 
<div className="flex-1 bg-gray-200 rounded-full h-2"> 
<motion.div className={`h-2 rounded-full ${getProgressColor(skills[skill])}`} initial={{width: 0}} whileInView={{width: `${skills[skill]}%`}} transition={{duration: 1,delay: 0.2}} /> 
</div> 
<div className={`text-sm font-medium ${getSkillColor(skills[skill])}`}> 
{skills[skill]}% 
</div> 
</div> 
))} 
</div> 
);
};

return ( 
<div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}> 
{/* Hero Section */} 
<section className={`relative py-20 ${darkMode ? 'bg-gray-800' : 'solid-bg-muted-purple'}`}> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
<div className="text-center text-white"> 
<motion.h1 className="font-display font-bold text-4xl lg:text-6xl mb-6" initial={{opacity: 0,y: 20}} animate={{opacity: 1,y: 0}} > 
Student Progress 
</motion.h1> 
<motion.p className="text-xl lg:text-2xl max-w-3xl mx-auto" initial={{opacity: 0,y: 20}} animate={{opacity: 1,y: 0}} transition={{delay: 0.2}} > 
Track your child's learning journey and celebrate their achievements 
</motion.p> 
</div> 
</div> 
</section>

{/* Filter Section */} 
<section className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
<div className="flex flex-wrap items-center gap-4"> 
<span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}> 
Filter by: 
</span> 
<select value={selectedStudent} onChange={(e)=> setSelectedStudent(e.target.value)} className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`} > 
<option value="all">All Students</option> 
{students.slice(1).map((student)=> ( 
<option key={student} value={student}>{student}</option> 
))} 
</select> 
<select value={selectedCourse} onChange={(e)=> setSelectedCourse(e.target.value)} className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`} > 
<option value="all">All Courses</option> 
{courses.slice(1).map((course)=> ( 
<option key={course} value={course}>{course}</option> 
))} 
</select> 
</div> 
</div> 
</section>

{/* Progress Cards */} 
<section className="py-20"> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
<div className="grid lg:grid-cols-2 gap-8"> 
{filteredProgress.map((progress,index)=> ( 
<motion.div key={progress.id} initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{delay: index * 0.1}} className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`} > 
{/* Student Header */} 
<div className="flex items-center justify-between mb-6"> 
<div className="flex items-center space-x-3"> 
<div className="w-12 h-12 bg-soft-rose rounded-full flex items-center justify-center"> 
<SafeIcon icon={FiUser} className="w-6 h-6 text-white" /> 
</div> 
<div> 
<h3 className={`font-display font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}> 
{progress.studentName} 
</h3> 
<p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}> 
{progress.course} • ID: {progress.studentId} 
</p> 
</div> 
</div> 
<div className="text-right"> 
<div className={`text-2xl font-bold ${getSkillColor(progress.progress)}`}> 
{progress.progress}% 
</div> 
<p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}> 
Overall Progress 
</p> 
</div> 
</div>

{/* Progress Bar */} 
<div className="mb-6"> 
<div className="flex justify-between items-center mb-2"> 
<span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}> 
Course Progress 
</span> 
<span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}> 
{progress.progress}% 
</span> 
</div> 
<div className="w-full bg-gray-200 rounded-full h-3"> 
<motion.div className={`h-3 rounded-full ${getProgressColor(progress.progress)}`} initial={{width: 0}} whileInView={{width: `${progress.progress}%`}} transition={{duration: 1,delay: 0.5}} /> 
</div> 
</div>

{/* Skills Breakdown */} 
<div className="mb-6"> 
<h4 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}> 
Skills Assessment 
</h4> 
<ProgressChart skills={progress.skills} /> 
</div>

{/* Achievements */} 
<div className="mb-6"> 
<h4 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}> 
Recent Achievements 
</h4> 
<div className="space-y-2"> 
{progress.achievements.map((achievement,i)=> ( 
<div key={i} className="flex items-center space-x-2"> 
<SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 flex-shrink-0" /> 
<span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}> 
{achievement} 
</span> 
</div> 
))} 
</div> 
</div>

{/* Last Updated */} 
<div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4"> 
<div className="flex items-center space-x-1"> 
<SafeIcon icon={FiClock} className="w-4 h-4" /> 
<span>Last updated: {formatDate(progress.lastUpdated)}</span> 
</div> 
<button className="text-primary-500 hover:text-primary-600 font-medium"> 
View Details 
</button> 
</div> 
</motion.div> 
))} 
</div> 
{filteredProgress.length===0 && ( 
<div className="text-center py-12"> 
<SafeIcon icon={FiTrendingUp} className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} /> 
<h3 className={`font-display font-bold text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}> 
No progress data found 
</h3> 
<p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}> 
Try adjusting your filter criteria 
</p> 
</div> 
)} 
</div> 
</section>

{/* Progress Statistics */} 
<section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
<div className="text-center mb-16"> 
<motion.h2 className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`} initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} > 
Progress Overview 
</motion.h2> 
<motion.p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.2}} > 
Overall performance statistics across all students 
</motion.p> 
</div> 
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> 
{[ 
{number: '85%',label: 'Average Progress',icon: FiTrendingUp},
{number: '250+',label: 'Students Tracked',icon: FiUser},
{number: '1,200+',label: 'Achievements Earned',icon: FiAward},
{number: '6',label: 'Active Programs',icon: FiBookOpen} 
].map((stat,index)=> ( 
<motion.div key={index} initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{delay: index * 0.1}} className={`text-center p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`} > 
<div className="w-16 h-16 bg-soft-rose rounded-full flex items-center justify-center mx-auto mb-4"> 
<SafeIcon icon={stat.icon} className="w-8 h-8 text-white" /> 
</div> 
<div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}> 
{stat.number} 
</div> 
<div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}> 
{stat.label} 
</div> 
</motion.div> 
))} 
</div> 
</div> 
</section>

{/* Progress Tips */} 
<section className="py-20"> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
<div className="text-center mb-16"> 
<motion.h2 className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`} initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} > 
Supporting Your Child's Progress 
</motion.h2> 
<motion.p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.2}} > 
Tips and strategies to help your child succeed 
</motion.p> 
</div> 
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 
{[ 
{icon: FiBookOpen,title: 'Reading at Home',description: 'Encourage daily reading sessions to improve literacy skills and vocabulary development.'},
{icon: FiTarget,title: 'Set Goals Together',description: 'Work with your child to set achievable learning goals and celebrate milestones.'},
{icon: FiCalendar,title: 'Consistent Routine',description: 'Maintain a regular study schedule to reinforce learning and build good habits.'},
{icon: FiUser,title: 'Teacher Communication',description: 'Stay in regular contact with teachers to understand your child\'s progress and needs.'},
{icon: FiAward,title: 'Celebrate Achievements',description: 'Acknowledge and celebrate your child\'s accomplishments to boost confidence.'},
{icon: FiTrendingUp,title: 'Monitor Progress',description: 'Regularly review progress reports and discuss improvements with your child.'} 
].map((tip,index)=> ( 
<motion.div key={index} initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{delay: index * 0.1}} className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`} > 
<div className="w-12 h-12 bg-soft-rose rounded-full flex items-center justify-center mb-4"> 
<SafeIcon icon={tip.icon} className="w-6 h-6 text-white" /> 
</div> 
<h3 className={`font-display font-bold text-xl mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}> 
{tip.title} 
</h3> 
<p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}> 
{tip.description} 
</p> 
</motion.div> 
))} 
</div> 
</div> 
</section> 
</div> 
);
};

export default Progress;