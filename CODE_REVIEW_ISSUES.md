# Code Review: Issues and Required Changes

Based on the Next.js rules in `.cursor/rules/next-js-rules.mdc`, here are the issues found and changes needed:

## 🔴 Critical Issues

### 1. **Status Value Mismatch (Type Safety Violation)**

- **Location**: `src/types/tasks.ts`, `src/mocks/tasks.ts`, `src/constants/filters.ts`
- **Issue**: Type definition uses camelCase (`'inProgress' | 'notStarted'`) but mock data and filters use kebab-case (`'in-progress'`, `'not-started'`)
- **Impact**: Runtime errors, type mismatches
- **Fix Required**: Align all status values to use consistent format (recommend camelCase to match TypeScript convention)

### 2. **Missing Error Handling**

- **Location**: All components, especially `src/app/page.tsx`
- **Issue**: No try-catch blocks, no error boundaries, no fallback UI for errors
- **Rule Violation**: "Include try-catch and fallback UI for errors"
- **Fix Required**:
  - Add error boundaries
  - Add try-catch for data operations
  - Add error fallback UI components

### 3. **Unused/Unnecessary Code**

- **Location**: Multiple files have large blocks of commented code
  - `src/app/page.tsx` (lines 68-168)
  - `src/components/tasks/index.tsx` (lines 31-107)
  - `src/components/tasks/taskItem.tsx` (lines 76-199)
  - `src/components/filters/filterItem.tsx` (lines 38-78)
  - `src/components/ui/chip.tsx` (lines 17-28)
  - `src/mocks/tasks.ts` (lines 54-108)
  - `src/constants/filters.ts` (lines 26-31)
- **Rule Violation**: Code should be self-documenting, commented code should be removed
- **Fix Required**: Remove all commented code blocks

### 4. **Unnecessary useEffect with Console.log**

- **Location**: `src/app/page.tsx` (lines 40-42)
- **Issue**: useEffect only logs, serves no purpose, and console.log violates linting rules
- **Rule Violation**: "Minimize useEffect", "no-console" lint rule
- **Fix Required**: Remove the useEffect or implement proper functionality

## 🟡 TypeScript & Code Quality Issues

### 5. **Type Naming Convention**

- **Location**: `src/types/ui.ts`
- **Issue**: `chipProps` should be `ChipProps` (PascalCase for types)
- **Rule Violation**: TypeScript naming conventions
- **Fix Required**: Rename to `ChipProps`

### 6. **Type Naming in Constants**

- **Location**: `src/constants/tasks.ts`
- **Issue**: `chipType` should be `ChipType` (PascalCase)
- **Fix Required**: Rename to `ChipType`

### 7. **Type Inconsistencies**

- **Location**: `src/components/filters/index.tsx`
- **Issue**: Props accept `string | null` but are used as `string` in FilterItem
- **Fix Required**: Align types - either use `string` everywhere or handle null properly

### 8. **Missing Type Exports**

- **Location**: `src/types/tasks.ts`
- **Issue**: `TaskItemProps` is used but not exported/defined in types file
- **Fix Required**: Define and export `TaskItemProps` type

## 🟠 React & Performance Issues

### 9. **Missing React.memo**

- **Location**: All component files
- **Issue**: Components not memoized, causing unnecessary re-renders
- **Rule Violation**: "Use React.memo and analyze bundle size"
- **Fix Required**: Wrap components with React.memo where appropriate

### 10. **Missing Suspense Boundaries**

- **Location**: `src/app/page.tsx`, `src/app/layout.tsx`
- **Issue**: Client components not wrapped in Suspense
- **Rule Violation**: "Wrap client components in <Suspense> with lightweight fallbacks"
- **Fix Required**: Add Suspense boundaries around client components

### 11. **Overuse of 'use client'**

- **Location**: `src/app/page.tsx`
- **Issue**: Entire page is client component, could be split into server/client components
- **Rule Violation**: "Minimize 'use client', useEffect, and useState. Favor React Server Components"
- **Fix Required**: Consider splitting into server component with client components only where needed

### 12. **Missing Event Handler Prefixes**

- **Location**: `src/components/search/index.tsx`, `src/components/filters/filterItem.tsx`
- **Issue**: Event handlers not prefixed with `handle`
- **Rule Violation**: "Prefix event handlers with handle (e.g., handleClick)"
- **Fix Required**: Rename handlers (e.g., `onChange` → `handleChange`)

### 13. **Sorting Not Implemented**

- **Location**: `src/app/page.tsx`
- **Issue**: `sortOption` state exists but sorting logic is not applied to `filteredTasks`
- **Fix Required**: Implement sorting logic based on `sortOption`

## 🟢 Image & Optimization Issues

### 14. **Image Optimization Missing**

- **Location**: `src/components/layout/header.tsx`
- **Issue**: Images don't have explicit sizes or lazy loading
- **Rule Violation**: "Optimize images with next/image (WebP, explicit sizes, loading='lazy')"
- **Fix Required**:
  - Add explicit width/height or use `fill` with proper container
  - Add `loading="lazy"` for non-critical images (avatar can stay priority)

### 15. **Missing Empty States**

- **Location**: `src/components/tasks/index.tsx`
- **Issue**: No handling for empty task lists
- **Rule Violation**: "Address edge cases (e.g., empty states, network failures)"
- **Fix Required**: Add empty state UI when `taskList.length === 0`

## 🔵 Code Style Issues

### 16. **Inconsistent Arrow Function Usage**

- **Location**: Multiple files
- **Issue**: Some functions use `export default function`, should use `const` arrow functions with types
- **Rule Violation**: "Use const arrow functions with types (e.g., const toggle: () => void = () =>)"
- **Fix Required**: Convert to const arrow functions with explicit types

### 17. **Missing Early Returns**

- **Location**: `src/app/page.tsx` (filtering logic)
- **Issue**: Filter logic could use early returns for better readability
- **Rule Violation**: "Use early returns for readability"
- **Fix Required**: Refactor filter logic to use early returns

### 18. **Unused Import**

- **Location**: `src/components/tasks/index.tsx` (line 3)
- **Issue**: `taskList` imported from mocks but not used (filtered list is passed as prop)
- **Fix Required**: Remove unused import

### 19. **Unused Import in Filters**

- **Location**: `src/components/filters/index.tsx` (line 2)
- **Issue**: `sortOption as sortOptions` imported but `sortOptions` from line 7 is used instead
- **Fix Required**: Remove duplicate/unused import

## 📋 Additional Recommendations

### 20. **Add Error Boundary Component**

- Create `src/components/ErrorBoundary.tsx` for error handling

### 21. **Add Loading States**

- Add loading states for any async operations (if added in future)

### 22. **Add Environment Configuration**

- Create `.env.local.example` for configuration management
- **Rule Reference**: "Use .env.local for configuration"

### 23. **Bundle Analysis**

- Add `@next/bundle-analyzer` to analyze bundle size
- **Rule Reference**: "Measure performance with Lighthouse or @next/bundle-analyzer"

### 24. **Add Status Documentation**

- Create or update `status.md` to track changes and feedback
- **Rule Reference**: "update status.md"

### 25. **Security Review**

- If user input is added, implement validation with zod
- **Rule Reference**: Security section mentions zod for validation

---

## Priority Order for Fixes

1. **Critical**: Fix status value mismatch (#1)
2. **Critical**: Remove commented code (#3)
3. **Critical**: Add error handling (#2)
4. **High**: Fix type issues (#5, #6, #7, #8)
5. **High**: Implement sorting (#13)
6. **Medium**: Add React.memo and Suspense (#9, #10)
7. **Medium**: Fix event handler naming (#12)
8. **Low**: Image optimization (#14)
9. **Low**: Code style improvements (#16, #17)

---

## Summary

**Total Issues Found**: 25

- **Critical**: 4
- **High Priority**: 5
- **Medium Priority**: 4
- **Low Priority**: 5
- **Recommendations**: 7

The codebase needs significant cleanup and improvements to fully comply with the Next.js rules, particularly around error handling, type safety, code cleanup, and React best practices.

