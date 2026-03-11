export type Category = 'Architecture' | 'Urban Design' | 'Landscape' | 'Research' | 'Academic Projects';

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  category: Category;
  concept: string;
  heroImage: string;
  gallery: string[];
  sections: {
    siteAnalysis: string;
    programDiagram: string;
    plans: string;
    sections: string;
    renderings: string;
    process: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'nordic-waterfront-library',
    title: 'Nordic Waterfront Library',
    location: 'Copenhagen, Denmark',
    year: '2024',
    category: 'Architecture',
    concept:
      'A porous civic landmark that stitches the harbor edge to the city with layered reading terraces, daylight courtyards, and timber structural bays.',
    heroImage: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1465804575741-338df8554e02?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&w=1600&q=80'
    ],
    sections: {
      siteAnalysis: 'Wind corridors and public movement traces define the building orientation and stepped public plinth.',
      programDiagram: 'Quiet and active zones are stacked with visual overlap through central voids.',
      plans: 'Plans follow a 9m structural bay system with flexible studio and reading halls.',
      sections: 'Sections articulate thermal chimneys and daylight scoops.',
      renderings: 'Renderings emphasize tactile timber interiors and soft northern light.',
      process: 'Design process moved from hand sketches to parametric massing and physical study models.'
    }
  },
  {
    slug: 'metropolitan-green-loop',
    title: 'Metropolitan Green Loop',
    location: 'Stockholm, Sweden',
    year: '2023',
    category: 'Urban Design',
    concept:
      'An ecological mobility loop reconnecting fragmented neighborhoods through green corridors, mixed-use nodes, and climate-adaptive public realms.',
    heroImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80'
    ],
    sections: {
      siteAnalysis: 'Transit heat maps and ecological patch analysis establish intervention zones.',
      programDiagram: 'Transit, recreation, and housing are integrated into catalytic hubs.',
      plans: 'District plans balance density with porous public ground.',
      sections: 'Mobility sections resolve multi-level pedestrian and cycle flows.',
      renderings: 'Urban renderings frame everyday life along climate-resilient boulevards.',
      process: 'GIS analysis and iterative systems mapping guided all design phases.'
    }
  },
  {
    slug: 'coastal-learning-campus',
    title: 'Coastal Learning Campus',
    location: 'Bergen, Norway',
    year: '2022',
    category: 'Academic Projects',
    concept:
      'A terraced education campus that negotiates steep topography while creating sheltered social courtyards and views to the fjord.',
    heroImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494145904049-3bf7ce2f1dff?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80'
    ],
    sections: {
      siteAnalysis: 'Slope and runoff analysis informed retaining and planting strategy.',
      programDiagram: 'Academic clusters orbit a shared community commons.',
      plans: 'Layered plans follow contour lines to reduce excavation.',
      sections: 'Longitudinal sections reveal daylight and cross-ventilation logic.',
      renderings: 'Renderings focus on pedagogical spaces opening to landscape.',
      process: 'Explorations include charcoal sketches, foam models, and digital simulations.'
    }
  }
];

export const drawingLibrary = ['Plans', 'Sections', 'Elevations', 'Construction Details', 'Technical Diagrams'];

export const researchTopics = [
  'Site analysis and urban morphologies',
  'Environmental simulations and climate studies',
  'Bubble diagrams and spatial adjacencies',
  'Mapping, data visualizations, and territorial narratives'
];

export const referenceStudio = [
  'Material textures and assemblies',
  'Precedent typologies and spatial atmospheres',
  'Landscape and planting references',
  'Lighting and environmental moods'
];
