/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserInfo {
    ardaId: number
    ggId: string
    name: string
    comparableName: string
    username: string
    professionalHeadline: string
    imageUrl: string
    completion: number
    grammar: number
    weight: number
    verified: boolean
    connections: any[]
    totalStrength: number
    pageRank: number
    organizationId: any
    organizationNumericId: any
    publicId: any
    status: any
    creators: any[]
    relationDegree: number
    contact: boolean
}
  
export interface FullUserInfo {
    context: Context
    _meta: Meta
    compensations: Compensations
    locationName: string
    name: string
    openTo: string[]
    picture: string
    professionalHeadline: string
    theme: string
    remoter: boolean
    skills: Skill[]
    subjectId: string
    subscriptions: any[]
    username: string
    verified: boolean
    weight: number
    ggId: string
}

export interface Context {
    signaled: any
}

export interface Meta {
    ranker: Ranker
    filter: Filter
    boosters: string[]
}

export interface Ranker {
    "@type": string
    rank: number
    score: any
    min: any
    max: any
    uncertain: boolean
    and: And[]
}

export interface And {
    "@type": string
    rank: number
    scorer: string
    score: any
    min: any
    max: any
    uncertain: boolean
    missingInformation: boolean
    input: Input
}

export interface Input {
    criteria: any
    person: Person
}

export interface Person {
    completion?: number
    weight?: number
}

export interface Filter {
    "@type": string
    pass: boolean
    id: string
    input: any
    debug: any
}

export interface Compensations {
    "flexible-job": FlexibleJob
    employee: Employee
}

export interface FlexibleJob {
    amount: number
    currency: string
    minHourlyUSD: number
    periodicity: string
    privacy: string
}

export interface Employee {
    amount: number
    currency: string
    minHourlyUSD: number
    periodicity: string
    privacy: string
}

export interface Skill {
    name: string
    weight: number
}

export interface Aggregators {}

export interface Pagination {
    previous: any
    next: any
}
