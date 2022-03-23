export interface CatBreeds {
    adaptability: number;
    affection_level: number;
    alt_names: string;
    cfa_url: string;
    child_friendly: number;
    country_code: string;
    country_codes: string;
    description: string;
    dog_friendly: number;
    energy_level: number;
    experimental: number;
    grooming: number;
    hairless: number;
    health_issues: number;
    hypoallergenic: number;
    id: string;
    image: ImageURL;
    indoor: number;
    intelligence: number;
    lap: number;
    life_span: string;
    name: string;
    natural: string;
    origin: string;
    rare: number;
    reference_image_id: string;
    rex: string;
    shedding_level: number;
    short_legs: number;
    social_needs: number;
    stranger_friendly: number;
    suppressed_tail: number;
    temperament: string;
    vcahospitals_url: string;
    vetstreet_url: string;
    vocalisation: number;
    weight: WeightDATA;
    wikipedia_url: string;
    imageUrlValue?: string;
}

export interface ImageURL {
    height: number;
    id: string;
    url: string;
    width: number;
}

export interface WeightDATA {
    imperial: string;
    metric: string;
}