import { skillFocusCategories } from "@/lib/data";

const ProjectSkillsRadar = () => {
  const chartWidth = 540;
  const chartHeight = 400;
  const chartCenterX = chartWidth / 2;
  const chartCenterY = chartHeight / 2;
  const chartRadius = 120;
  const labelRadius = 150;
  const maximumSkillLevel = 100;

  const pointFor = (radius: number, index: number) => {
    const angle = (Math.PI * 2 * index) / skillFocusCategories.length - Math.PI / 2;

    return {
      x: chartCenterX + Math.cos(angle) * radius,
      y: chartCenterY + Math.sin(angle) * radius,
    };
  };

  const polygonPoints = (radius: number) =>
    skillFocusCategories
      .map((_, index) => {
        const point = pointFor(radius, index);
        return `${point.x},${point.y}`;
      })
      .join(" ");

  const coveragePoints = skillFocusCategories
    .map((category, index) => {
      const point = pointFor((category.level / maximumSkillLevel) * chartRadius, index);
      return `${point.x},${point.y}`;
    })
    .join(" ");

  return (
    <div className="mb-12 grid gap-6 rounded-lg border border-border bg-card/80 p-5 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center">
      <div className="min-w-0">
        <h3 className="text-xl font-bold">Skill focus map</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          A self-assessment of my current focus and confidence across the engineering stack.
        </p>

        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="mt-2 h-auto w-full max-w-5xl"
          role="img"
          aria-labelledby="skill-focus-map-title skill-focus-map-description"
        >
          <title id="skill-focus-map-title">Skill focus by engineering category</title>
          <desc id="skill-focus-map-description">
            A radar chart showing a personal self-assessment of current focus and confidence across engineering categories.
          </desc>

          {[0.25, 0.5, 0.75, 1].map((level) => (
            <polygon
              key={level}
              points={polygonPoints(chartRadius * level)}
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="1"
            />
          ))}

          {skillFocusCategories.map((category, index) => {
            const point = pointFor(chartRadius, index);
            const labelPoint = pointFor(labelRadius, index);
            const textAnchor = Math.abs(labelPoint.x - chartCenterX) < 8 ? "middle" : labelPoint.x > chartCenterX ? "start" : "end";
            const verticalOffset = Math.abs(labelPoint.y - chartCenterY) < 8 ? 4 : labelPoint.y > chartCenterY ? 8 : -4;

            return (
              <g key={category.category}>
                <line
                  x1={chartCenterX}
                  y1={chartCenterY}
                  x2={point.x}
                  y2={point.y}
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                />
                <text
                  x={labelPoint.x}
                  y={labelPoint.y + verticalOffset}
                  fill="hsl(var(--foreground))"
                  fontSize="12"
                  fontWeight="600"
                  textAnchor={textAnchor}
                >
                  {category.category}
                </text>
              </g>
            );
          })}

          <polygon
            points={coveragePoints}
            fill="hsl(var(--primary) / 0.24)"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />

          {skillFocusCategories.map((category, index) => {
            const point = pointFor((category.level / maximumSkillLevel) * chartRadius, index);

            return (
              <g key={`${category.category}-point`}>
                <title>
                  {category.category}: {category.focus} ({category.level}/100)
                </title>
                <circle cx={point.x} cy={point.y} r="4" fill="hsl(var(--primary))" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
        {skillFocusCategories.map((category) => (
          <div key={category.category} className="rounded-md border border-border bg-background/70 px-3 py-2">
            <p className="text-sm font-semibold">{category.category}</p>
            <p className="text-sm text-muted-foreground">
              {category.focus}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSkillsRadar;
