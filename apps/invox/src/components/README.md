# ProfileGrid Component

A highly reusable and responsive profile card grid component built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Beautiful Design**: Modern card-based layout with hover effects and smooth transitions
- 📱 **Fully Responsive**: Automatically adapts to different screen sizes
- ♿ **Accessibility**: Keyboard navigation and ARIA support
- 🔄 **Loading States**: Built-in skeleton loading components
- 🎯 **Selection Support**: Visual feedback for selected cards
- 🎭 **Customizable**: Flexible props for styling and behavior
- 📊 **Type Safe**: Full TypeScript support with proper interfaces

## Basic Usage

```tsx
import { ProfileGrid, ProfileCardData } from "./tableGrid";

const profiles: ProfileCardData[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Developer",
    status: "active",
    profileImage: "/path/to/image.jpg",
  },
  // ... more profiles
];

function MyComponent() {
  return (
    <ProfileGrid
      data={profiles}
      onCardClick={(profile) => console.log("Clicked:", profile)}
    />
  );
}
```

## Props

### ProfileGridProps

| Prop                | Type                                 | Default                | Description                       |
| ------------------- | ------------------------------------ | ---------------------- | --------------------------------- |
| `data`              | `ProfileCardData[]`                  | **Required**           | Array of profile data             |
| `isLoading`         | `boolean`                            | `false`                | Shows loading skeleton state      |
| `columns`           | `number`                             | `5`                    | Number of columns (1-6 supported) |
| `className`         | `string`                             | `undefined`            | Additional CSS classes            |
| `onCardClick`       | `(profile: ProfileCardData) => void` | `undefined`            | Click handler for cards           |
| `selectedCardId`    | `string`                             | `undefined`            | ID of currently selected card     |
| `emptyStateMessage` | `string`                             | `"No profiles found."` | Message when no data              |

### ProfileCardData

```tsx
interface ProfileCardData {
  id: string;
  name: string;
  role: string;
  status: "active" | "inactive";
  profileImage: string;
  profileImageAlt?: string;
}
```

## Examples

### Basic Grid

```tsx
<ProfileGrid data={profiles} />
```

### Custom Columns

```tsx
<ProfileGrid data={profiles} columns={3} />
```

### With Selection

```tsx
const [selectedId, setSelectedId] = useState<string | null>(null);

<ProfileGrid
  data={profiles}
  selectedCardId={selectedId}
  onCardClick={(profile) => setSelectedId(profile.id)}
/>;
```

### Loading State

```tsx
<ProfileGrid data={profiles} isLoading={true} />
```

### Custom Styling

```tsx
<ProfileGrid data={profiles} className="bg-gray-50 p-6 rounded-xl" />
```

### Empty State

```tsx
<ProfileGrid data={[]} emptyStateMessage="No team members found." />
```

## Responsive Behavior

The component automatically handles responsive layouts:

- **Mobile**: 1 column
- **Small screens**: 2 columns
- **Large screens**: 3-4 columns
- **Extra large**: 5-6 columns

## Accessibility Features

- ✅ Keyboard navigation (Enter/Space to select)
- ✅ Proper ARIA roles and labels
- ✅ Focus management
- ✅ Screen reader friendly

## Styling

The component uses Tailwind CSS classes and can be customized through:

1. **className prop**: Add custom CSS classes
2. **CSS variables**: Override default colors and spacing
3. **Tailwind config**: Modify the design system

## Performance

- 🚀 **Optimized rendering**: Only re-renders when necessary
- 📦 **Lazy loading**: Skeleton components for better UX
- 🎯 **Efficient updates**: Minimal DOM manipulation

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers
- ✅ IE11+ (with polyfills)

## Dependencies

- React 16.8+
- TypeScript 4.0+
- Tailwind CSS 3.0+
- MobX React Lite (for observer pattern)

## Migration from TableGrid

The component maintains backward compatibility:

```tsx
// Old usage still works
import { TableGrid } from "./tableGrid";

// New usage (recommended)
import { ProfileGrid } from "./tableGrid";
```

## Contributing

When modifying this component:

1. Maintain TypeScript strict mode
2. Add proper JSDoc comments
3. Test responsive behavior
4. Ensure accessibility compliance
5. Update this documentation
