import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"

const projects = [
  {
    title: "Employee Registration System",
    description:
      "Employee data registration and validation built with InterSystems IRIS ObjectScript, including Japanese Kanji/Kana input handling.",
    href: "https://github.com/KhaingKhant/Employee-Registration-System",
  },
  {
    title: "Quarkus Quartz Data Sync",
    description:
      "A scheduled backend service that fetches external REST API data and persists it to PostgreSQL using Java, Quarkus and Quartz.",
    href: "https://github.com/KhaingKhant/quarkus_quartz_jobs",
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio built with Next.js, React, Chakra UI and Framer Motion.",
    href: "https://github.com/KhaingKhant/akk-profilo",
  },
]

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Quarkus",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "InterSystems IRIS",
]

const Page = () => {
  return (
    <Container maxW="4xl" py={{ base: 10, md: 16 }}>
      <Stack spacing={10}>
        <Box>
          <Text fontSize="sm" fontWeight="semibold" letterSpacing="wide" textTransform="uppercase" mb={3}>
            Full-Stack / Backend Engineer
          </Text>
          <Heading as="h1" size="2xl" mb={4}>
            Aung Khaing Khant
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" lineHeight="tall">
            Software engineer based in Japan with experience building web applications, backend services,
            enterprise systems and automation across Java, React, Next.js, Node.js and InterSystems IRIS.
          </Text>

          <Stack direction={{ base: "column", sm: "row" }} spacing={3} mt={6}>
            <Button as={Link} href="https://github.com/KhaingKhant" isExternal colorScheme="teal">
              View GitHub
            </Button>
            <Button as={Link} href="mailto:khaingkhantjob@gmail.com" variant="outline">
              Contact Me
            </Button>
          </Stack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Core Skills
          </Heading>
          <Wrap spacing={2}>
            {skills.map((skill) => (
              <WrapItem key={skill}>
                <Tag size="lg">{skill}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Selected Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {projects.map((project) => (
              <Box key={project.title} borderWidth="1px" borderRadius="lg" p={5}>
                <Heading as="h3" size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text mb={4}>{project.description}</Text>
                <Link href={project.href} isExternal fontWeight="semibold" color="teal.500">
                  View repository →
                </Link>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={3}>
            What I focus on
          </Heading>
          <Text lineHeight="tall">
            I enjoy turning business requirements into reliable software: APIs, data workflows,
            internal tools and user-facing products. I am especially interested in remote product teams
            where I can own features end-to-end and work across backend and frontend when needed.
          </Text>
        </Box>
      </Stack>
    </Container>
  )
}

export default Page
