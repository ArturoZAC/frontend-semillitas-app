import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ============================================
    // RUTAS PÚBLICAS (sin auth)
    // ============================================
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/HomePage.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/modules/auth/pages/login/LoginPage.vue'),
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('@/modules/auth/pages/forgot-password/ForgotPasswordPage.vue'),
    },

    // ============================================
    // MÓDULO: ENROLLMENT (Matrícula)
    // ============================================
    {
      path: '/enrollments',
      name: 'enrollments-list',
      component: () =>
        import('@/modules/enrollment/pages/enrollments-list/EnrollmentsListPage.vue'),
    },
    {
      path: '/enrollments/create',
      name: 'enrollment-create',
      component: () =>
        import('@/modules/enrollment/pages/enrollment-create/EnrollmentCreatePage.vue'),
    },
    {
      path: '/enrollments/:id',
      name: 'enrollment-detail',
      component: () =>
        import('@/modules/enrollment/pages/enrollment-detail/EnrollmentDetailPage.vue'),
    },

    // ============================================
    // MÓDULO: ATTENDANCE (Asistencia)
    // ============================================
    {
      path: '/attendance',
      name: 'attendance',
      component: () =>
        import('@/modules/attendance/pages/mark-teacher-attendance/MarkTeacherAttendancePage.vue'),
    },
    {
      path: '/attendance/history',
      name: 'teacher-history',
      component: () => import('@/modules/attendance/pages/teacher-history/TeacherHistoryPage.vue'),
    },
    {
      path: '/attendance/children',
      name: 'mark-child-attendance',
      component: () =>
        import('@/modules/attendance/pages/mark-child-attendance/MarkChildAttendancePage.vue'),
    },
    {
      path: '/attendance/report',
      name: 'attendance-report',
      component: () =>
        import('@/modules/attendance/pages/attendance-report/AttendanceReportPage.vue'),
    },

    // ============================================
    // MÓDULO: GRADES (Notas)
    // ============================================
    {
      path: '/grades',
      name: 'grades',
      component: () => import('@/modules/grades/pages/upload-excel/UploadExcelPage.vue'),
    },
    {
      path: '/grades/evaluate',
      name: 'grade-evaluation',
      component: () =>
        import('@/modules/grades/pages/grade-evaluation/GradeEvaluationPage.vue'),
    },
    {
      path: '/grades/download',
      name: 'grade-download',
      component: () =>
        import('@/modules/grades/pages/download-excel/DownloadExcelPage.vue'),
    },

    // ============================================
    // 404
    // ============================================
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/pages/not-found/NotFoundPage.vue'),
    },
  ],
})

export default router
