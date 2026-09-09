import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ============================================
    // RUTAS PÚBLICAS (Layout: AppLayout - sin auth)
    // ============================================
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/HomePage.vue'),
      meta: { layout: 'app' },
    },

    // ============================================
    // AUTH (Layout: AuthLayout - fondo degradado)
    // ============================================
    {
      path: '/login',
      name: 'login',
      component: () => import('@/modules/auth/pages/login/LoginPage.vue'),
      meta: { layout: 'auth' },
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('@/modules/auth/pages/forgot-password/ForgotPasswordPage.vue'),
      meta: { layout: 'auth' },
    },

    // ============================================
    // MÓDULO: ENROLLMENT (Layout: DashboardLayout)
    // ============================================
    {
      path: '/enrollments',
      name: 'enrollments-list',
      component: () =>
        import('@/modules/enrollment/pages/enrollments-list/EnrollmentsListPage.vue'),
      meta: { layout: 'dashboard' },
    },
    {
      path: '/enrollments/create',
      name: 'enrollment-create',
      component: () =>
        import('@/modules/enrollment/pages/enrollment-create/EnrollmentCreatePage.vue'),
      meta: { layout: 'dashboard' },
    },
    {
      path: '/enrollments/:id',
      name: 'enrollment-detail',
      component: () =>
        import('@/modules/enrollment/pages/enrollment-detail/EnrollmentDetailPage.vue'),
      meta: { layout: 'dashboard' },
    },

    // ============================================
    // MÓDULO: ATTENDANCE (Layout: DashboardLayout)
    // ============================================
    {
      path: '/attendance',
      name: 'attendance',
      component: () =>
        import('@/modules/attendance/pages/mark-teacher-attendance/MarkTeacherAttendancePage.vue'),
      meta: { layout: 'dashboard' },
    },
    {
      path: '/attendance/history',
      name: 'teacher-history',
      component: () => import('@/modules/attendance/pages/teacher-history/TeacherHistoryPage.vue'),
      meta: { layout: 'dashboard' },
    },
    {
      path: '/attendance/children',
      name: 'mark-child-attendance',
      component: () =>
        import('@/modules/attendance/pages/mark-child-attendance/MarkChildAttendancePage.vue'),
      meta: { layout: 'dashboard' },
    },
    {
      path: '/attendance/report',
      name: 'attendance-report',
      component: () =>
        import('@/modules/attendance/pages/attendance-report/AttendanceReportPage.vue'),
      meta: { layout: 'dashboard' },
    },

    // ============================================
    // MÓDULO: GRADES (Layout: DashboardLayout)
    // ============================================
    {
      path: '/grades',
      name: 'grades',
      component: () => import('@/modules/grades/pages/upload-excel/UploadExcelPage.vue'),
      meta: { layout: 'dashboard' },
    },
    {
      path: '/grades/evaluate',
      name: 'grade-evaluation',
      component: () => import('@/modules/grades/pages/grade-evaluation/GradeEvaluationPage.vue'),
      meta: { layout: 'dashboard' },
    },
    {
      path: '/grades/download',
      name: 'grade-download',
      component: () => import('@/modules/grades/pages/download-excel/DownloadExcelPage.vue'),
      meta: { layout: 'dashboard' },
    },

    // ============================================
    // 404 (Layout: AppLayout)
    // ============================================
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/pages/not-found/NotFoundPage.vue'),
      meta: { layout: 'app' },
    },
  ],
})

export default router
